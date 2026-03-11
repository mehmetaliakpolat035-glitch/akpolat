import { ReactNode } from 'react';
import Link from 'next/link';
import { internalLinks } from './internalLinks';

interface AutoLinkOptions {
  maxLinks?: number;
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function splitIntoParagraphs(text: string): string[] {
  return text.split(/\n\n+/);
}

function processParagraph(
  paragraph: string,
  links: Array<{ keyword: string; href: string }>,
  maxLinks: number
): string {
  if (!paragraph.trim()) {
    return paragraph;
  }

  let linkCount = 0;
  const usedKeywords = new Set<string>();
  let result = paragraph;

  const sortedLinks = [...links].sort((a, b) => b.keyword.length - a.keyword.length);

  for (const link of sortedLinks) {
    if (linkCount >= maxLinks) break;

    const keywordLower = link.keyword.toLowerCase();
    if (usedKeywords.has(keywordLower)) continue;

    const regex = new RegExp(`\\b${escapeRegExp(link.keyword)}\\b`, 'gi');
    
    if (regex.test(result)) {
      result = result.replace(regex, (match) => {
        if (linkCount >= maxLinks) return match;
        
        usedKeywords.add(keywordLower);
        linkCount++;
        
        return `<a href="${link.href}" class="internal-link">${match}</a>`;
      });
    }
  }

  return result;
}

export function autoLinkText(text: string, options: AutoLinkOptions = {}): string {
  const { maxLinks = 5 } = options;
  
  if (!text || typeof text !== 'string') {
    return '';
  }

  const paragraphs = splitIntoParagraphs(text);
  
  const processedParagraphs = paragraphs.map(paragraph => 
    processParagraph(paragraph, internalLinks, maxLinks)
  );
  
  return processedParagraphs.join('\n\n');
}

interface AutoLinkProps {
  text: string;
  maxLinks?: number;
  className?: string;
}

export function AutoLink({ text, maxLinks = 5, className = '' }: AutoLinkProps): ReactNode {
  const linkedText = autoLinkText(text, { maxLinks });

  const parts = linkedText.split(/(<a href="([^"]+)" class="internal-link">([^<]+)<\/a>)/g);

  return (
    <div className={className}>
      {parts.map((part, index) => {
        const linkMatch = part.match(/<a href="([^"]+)" class="internal-link">([^<]+)<\/a>/);
        
        if (linkMatch) {
          const [, href, text] = linkMatch;
          return (
            <Link 
              key={index} 
              href={href}
              className="text-blue-600 hover:text-blue-800 underline hover:no-underline font-medium"
            >
              {text}
            </Link>
          );
        }
        
        return part.split('\n').map((line, lineIndex) => (
          <span key={`${index}-${lineIndex}`}>
            {lineIndex > 0 && <br />}
            {line}
          </span>
        ));
      })}
    </div>
  );
}

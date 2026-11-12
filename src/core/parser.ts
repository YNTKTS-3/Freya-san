/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ParsedMessage {
  isCommand: boolean;
  prefix: string;
  commandName: string;
  args: string[];
  argText: string;
  rawText: string;
}

export class MessageParser {
  /**
   * Parse an incoming message against an active prefix or multi-prefix list.
   * Supports: '/', '!', '.', '#', and customizable prefixes.
   */
  public static parse(text: string, activePrefix: string = '/'): ParsedMessage {
    const rawText = (text || '').trim();
    if (!rawText) {
      return {
        isCommand: false,
        prefix: '',
        commandName: '',
        args: [],
        argText: '',
        rawText,
      };
    }

    // Supported global prefixes if configured, or matching the activePrefix
    const possiblePrefixes = [activePrefix, '!', '.', '#', '/'].filter(
      (v, i, a) => a.indexOf(v) === i
    );

    let matchedPrefix = '';
    for (const p of possiblePrefixes) {
      if (rawText.startsWith(p)) {
        matchedPrefix = p;
        break;
      }
    }

    if (!matchedPrefix) {
      return {
        isCommand: false,
        prefix: '',
        commandName: '',
        args: [],
        argText: '',
        rawText,
      };
    }

    // Strip prefix
    const bodyWithoutPrefix = rawText.slice(matchedPrefix.length).trim();
    if (!bodyWithoutPrefix) {
      return {
        isCommand: false,
        prefix: matchedPrefix,
        commandName: '',
        args: [],
        argText: '',
        rawText,
      };
    }

    // Split first word as commandName, rest as arguments
    const parts = bodyWithoutPrefix.split(/\s+/);
    const commandName = parts[0].toLowerCase();
    const args = parts.slice(1);
    const argText = bodyWithoutPrefix.slice(commandName.length).trim();

    return {
      isCommand: true,
      prefix: matchedPrefix,
      commandName,
      args,
      argText,
      rawText,
    };
  }

  /**
   * Parse quoted arguments e.g. /brat "hello world" or key=value flags
   */
  public static parseQuotedArgs(text: string): string[] {
    const regex = /[^\s"']+|"([^"]*)"|'([^']*)'/g;
    const matches: string[] = [];
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1] || match[2] || match[0]);
    }

    return matches;
  }
}

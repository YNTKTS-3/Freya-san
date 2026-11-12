/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LogMessage } from './types.ts';

type LogListener = (entry: LogMessage) => void;

class Logger {
  private logs: LogMessage[] = [];
  private maxLogs: number = 200;
  private listeners: Set<LogListener> = new Set();

  constructor() {
    this.info('Logger', 'Logger system initialized for Freya-san Bot');
  }

  private addLog(level: LogMessage['level'], source: string, message: string, metadata?: Record<string, unknown>) {
    const entry: LogMessage = {
      id: Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toLocaleTimeString('id-ID', { hour12: false }),
      level,
      source,
      message,
      metadata,
    };

    this.logs.unshift(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs.pop();
    }

    // Notify subscribers
    this.listeners.forEach((listener) => {
      try {
        listener(entry);
      } catch (err) {
        console.error('Error in log listener:', err);
      }
    });

    return entry;
  }

  public info(source: string, message: string, metadata?: Record<string, unknown>) {
    return this.addLog('INFO', source, message, metadata);
  }

  public warn(source: string, message: string, metadata?: Record<string, unknown>) {
    return this.addLog('WARN', source, message, metadata);
  }

  public error(source: string, message: string, metadata?: Record<string, unknown>) {
    return this.addLog('ERROR', source, message, metadata);
  }

  public cmd(source: string, message: string, metadata?: Record<string, unknown>) {
    return this.addLog('CMD', source, message, metadata);
  }

  public getLogs(): LogMessage[] {
    return [...this.logs];
  }

  public clear(): void {
    this.logs = [];
    this.info('Logger', 'Logs memory cleared by admin');
  }

  public subscribe(listener: LogListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

export const logger = new Logger();

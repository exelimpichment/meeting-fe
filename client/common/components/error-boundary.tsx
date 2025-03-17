'use client';

import { FallbackComponentProps } from '@/client/common';
import * as React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  FallbackComponent: React.ComponentType<FallbackComponentProps>;
  onError?: (error: Error, info: React.ErrorInfo) => void;
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    reportErrorToSentry();

    if (this.props.onError) {
      this.props.onError(error, info);
    }
  }

  resetBoundary = (): void => {
    this.setState({
      hasError: false,
      error: null,
    });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      const Fallback = this.props.FallbackComponent;
      return (
        <Fallback
          error={this.state.error as Error}
          resetErrorBoundary={this.resetBoundary}
        />
      );
    }

    return this.props.children;
  }
}

const reportErrorToSentry = () => {
  console.log('sent to sentry or somewhere');
};

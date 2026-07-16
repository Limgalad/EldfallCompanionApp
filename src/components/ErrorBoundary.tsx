import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-stone-950">
          <div className="surface-overlay w-full max-w-md text-center card-p-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <h1 className="h1-standard mb-2">Something went wrong</h1>
            <p className="text-stone-400 text-sm mb-6 leading-relaxed">
              An unexpected error occurred and this part of the app could not be
              displayed. Reloading the page usually fixes it.
            </p>
            <button onClick={this.handleReload} className="btn-secondary mx-auto">
              <RotateCcw className="w-4 h-4 mr-2" /> Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

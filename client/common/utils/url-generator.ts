export class UrlGenerator {
  private static readonly root: string = '/';
  private static readonly dashboardSegment: string = 'dashboard';

  private static join(...parts: string[]): string {
    // join parts with '/' and normalize multiple slashes to a single slash
    return parts.join('/').replace(/\/+/g, '/');
  }

  private static appendSearchParams(
    url: string,
    shareToken?: string | null,
    prev?: string | null,
    prevSearchParams?: string,
  ): string {
    const params: string[] = [];

    // add shareToken if provided
    if (shareToken) {
      params.push(`shareToken=${encodeURIComponent(shareToken)}`);
    }

    // add prev with prevSearchParams if provided
    if (prev) {
      const prevWithParams = prevSearchParams
        ? `${prev}?${prevSearchParams}`
        : prev;
      params.push(`prev=${encodeURIComponent(prevWithParams)}`);
    }

    // Append query string if there are any parameters
    return params.length > 0 ? `${url}?${params.join('&')}` : url;
  }

  static goPrev(
    prev?: string | null,
    shareToken?: string | null,
  ): string | null {
    if (!prev) return null;

    return shareToken
      ? `${prev}${prev.includes('?') ? '&' : '?'}shareToken=${encodeURIComponent(shareToken)}`
      : prev;
  }

  static rootUrl(): string {
    return this.root;
  }

  static signUp(): string {
    return this.join(this.root, 'auth', 'sign-up');
  }

  static signIn(): string {
    return this.join(this.root, 'auth', 'sign-in');
  }

  static dashboard(): string {
    return this.join(this.root, this.dashboardSegment);
  }

  // static agents({
  //   workspaceId,
  //   shareToken,
  //   prev,
  //   prevSearchParams,
  // }: {
  //   workspaceId: string;
  //   shareToken?: string | null;
  //   prev?: string | null;
  //   prevSearchParams?: string;
  // }): string {
  //   const url = this.join(
  //     this.root,
  //     this.dashboardSegment,
  //     workspaceId,
  //     'agents',
  //   );
  //   return this.appendSearchParams(url, shareToken, prev, prevSearchParams);
  // }
}

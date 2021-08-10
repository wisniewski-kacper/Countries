import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import { BaseRouterStoreState, RouterStateSerializer } from '@ngrx/router-store';

export interface RouterStateUrl extends BaseRouterStoreState {
  params: Params;
  queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    return {
      url: routerState.url,
      params: this.mergeRouteParams(routerState.root, r => r.params),
      queryParams: this.mergeRouteParams(routerState.root, r => r.queryParams)
    };
  }

  private mergeRouteParams(
    route: ActivatedRouteSnapshot | null,
    datasourceFn: (r: ActivatedRouteSnapshot) => Params
  ): Params {
    if (!route) {
      return {};
    }

    const currentParams = datasourceFn(route);
    const primaryChild = route.children.find(c => c.outlet === 'primary') || route.firstChild;

    return {
      ...currentParams,
      ...this.mergeRouteParams(primaryChild, datasourceFn)
    };
  }
}

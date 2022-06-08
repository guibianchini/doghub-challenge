import React from 'react';
import { Route, Switch } from 'react-router';

import DogDetailsPage from './pages/DogDetailsPage';
import ForAdoptionPage from './pages/ForAdoptionPage';
import CartPage from './pages/CartPage';

export const FOR_ADOPTION_PAGE_ROUTE = '/';
export const DOG_DETAILS_PAGE_ROUTE = '/dog';
export const CART_PAGE_ROUTE = '/cart';

export default function Routes () {
  return (
    <Switch>
      <Route exact path={FOR_ADOPTION_PAGE_ROUTE}>
        <ForAdoptionPage />
      </Route>
      <Route exact path={DOG_DETAILS_PAGE_ROUTE}>
        <DogDetailsPage />
      </Route>
      <Route exact path={CART_PAGE_ROUTE}>
        <CartPage />
      </Route>
      <Route render={() => (<div>Miss</div>)} />
    </Switch>
  )
}
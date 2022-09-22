import {
  back,
  forward,
  go,
  RouterActionTypes,
} from 'src/app/store/actions/router.actions';
import { testNewAction } from '@app/global/test-contexts/test-action-context.spec';

describe('Router Actions', () => {
  describe('Go', () => {
    testNewAction(go, RouterActionTypes.GO, { path: ['/test'] });
  });

  describe('Back', () => {
    testNewAction(back, RouterActionTypes.BACK);
  });

  describe('Forward', () => {
    testNewAction(forward, RouterActionTypes.FORWARD);
  });
});

import { IApi } from '@umijs/types';
import { join } from 'path';

export default (api: IApi) => {
  console.log(join(api?.paths?.cwd!, 'dist'))
  api.addTmpGenerateWatcherPaths(() => [join(api?.paths?.cwd!,'..', 'dist')])
};

import type { RulesConfig, UserConfig } from '@commitlint/types';

import { type } from './type';
import { scope } from './scope';
import { subject } from './subject';
import { header } from './header';
import { body } from './body';
import { footer } from './footer';
import { uncategorised } from './uncategorised';

const rules: RulesConfig = {
  ...body,
  ...type,
  ...scope,
  ...subject,
  ...header,
  ...footer,
  ...uncategorised,
};

const config: UserConfig = {
  rules,
};

export = config;

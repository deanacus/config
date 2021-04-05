import { type } from './type';
import { scope } from './scope';
import { subject } from './subject';
import { header } from './header';
import { body } from './body';
import { footer } from './footer';

export default {
  rules: {
    ...type,
    ...scope,
    ...subject,
    ...header,
    ...body,
    ...footer,
  },
};

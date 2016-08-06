require('./vendor');
require('./styles.scss');

import app from '../index';
import productionConfig from './config/production';
import developmentConfig from './config/development';

if (MODE.production) {
    productionConfig(app);
} else if (MODE.development) {
    developmentConfig();
}
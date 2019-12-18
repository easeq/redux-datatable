import _ from 'lodash';

const toPascalCase = ( str ) => _.chain(str).camelCase().upperFirst().value();

export default toPascalCase;

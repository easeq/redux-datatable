import isFunction from './isFunction';
import toPascalCase from './toPascalCase';

/**
 * Get renderer component for the renderer defined in the config
 * from a list of Renderers
 */
const getRenderer = ( config, Renderers ) => {
    if (config.renderer && isFunction(config.renderer)) {
        return config.renderer;
    }

    if (config.type) {
        const pcaseType = toPascalCase(config.type);
        return Renderers[pcaseType] || Renderers.default;
    }

    return Renderers.default;
};

export default getRenderer;

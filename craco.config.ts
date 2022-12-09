import {inject} from './linaria';

export const webpack = {
    configure(config: any) {
        for (const {oneOf} of config.module.rules)
            if (oneOf && oneOf.some(inject)) break;
        return config;
    }
};
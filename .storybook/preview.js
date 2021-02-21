import React from 'react';
import { ThemeContext } from '../src/contexts';
import mangarelTheme from '../src/theme';

import 'semantic-ui-css/semantic.min.css';
import '../src/index.css';

export const decorators = [(Story) => <ThemeContext.Provider value={mangarelTheme}><Story/></ThemeContext.Provider>];

import nx from '@nx/eslint-plugin';
import mantine from 'eslint-config-mantine';
import tseslint from 'typescript-eslint';
export default [  
  ...mantine,
  ...tseslint.config(
    { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}', './.storybook/main.ts'] },
    {
      files: ['**/*.story.tsx'],
      rules: { 'no-console': 'off' },
    }),
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/*.{mjs,cjs,js,d.ts,d.mts}',
      './.storybook/main.ts'
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
      
    ],
    // Override or add rules here
    rules: {},
  }
];

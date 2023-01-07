// @ts-nocheck
;(function Template() {
  const camelize = str =>
    str.replace(/\W+(.)/g, (_match, chr) => chr.toUpperCase())
  return {
    userInputs: [
      {
        title: 'What is the Component Name',
        argumentName: 'name', // will become input in template
        defaultValue: 'C',
      },
    ],
    template: [
      {
        type: 'folder',
        name: inputs => `${camelize(inputs.name)}`,
        children: [
          {
            type: 'file',
            name: inputs => `${camelize(inputs.name)}.tsx`,
            content: inputs => `import { FC } from 'react'
import s from './${camelize(inputs.name)}.module.scss'

export const ${camelize(inputs.name)}: FC = () => (
    <div></div>
)`,
          },
          {
            type: 'file',
            name: inputs => `${camelize(inputs.name)}.module.scss`,
            content: inputs => `@use 'styles/style.scss' as *;`,
          },
          {
            type: 'file',
            name: inputs => `index.ts`,
            content: inputs => `export * from './${camelize(inputs.name)}'`,
          },
        ],
      },
    ],
  }
})

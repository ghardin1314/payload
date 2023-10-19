import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

import { mediaSlug } from '../Media'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'associatedMedia',
      type: 'upload',
      relationTo: mediaSlug,
      access: {
        create: () => true,
        update: () => false,
      },
    },
    {
      name: 'postType',
      label: 'Post Type',
      type: 'radio',
      defaultValue: 'internal',
      options: [
        {
          label: 'Internal',
          value: 'internal',
        },
        {
          label: 'External',
          value: 'external',
        },
      ],
    },
    {
      label: 'External Post Props',
      type: 'group',
      name: 'externalProps',
      admin: {
        condition: (data) => data.postType === 'external',
      },
      fields: [],
    },
    {
      label: 'Internal Post Props',
      type: 'group',
      name: 'internalProps',
      admin: {
        condition: (data) => data.postType === 'internal',
      },
      fields: [
        {
          name: 'slug',
          type: 'text',
          unique: true,
          required: true,
        },
      ],
    },
  ],
}

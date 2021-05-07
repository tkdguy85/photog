export default {
  name: 'gear',
  title: 'Gear',
  type: 'document',
  fields: [
    {
      name: 'productName',
      type: 'string',
    },
    {
      name: 'primaryImage',
      title: 'Primary image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'secondImage',
      title: 'Second image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'gearType',
      title: 'Gear Type',
      type: 'string',
      options: {
        list: [
          { value: 'camera', title: 'Camera', },
          { value: 'lens', title: 'Lens', },
          { value: 'attachment', title: 'Attachments', },
          { value: 'mounts', title: 'Mounts', },
          { value: 'misc', title: 'Misc.', },
        ]
      }
    },
    {
      name: 'link',
      type: 'url',
    },
    {
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    }
  ]
}
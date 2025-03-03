// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
const c = require('./../schemas')

const purchaseables = ['level', 'thang_type']

const PurchaseSchema = c.object({ title: 'Purchase', required: ['purchaser', 'recipient', 'purchased'] }, {
  purchaser: c.objectId({
    links: [
      { rel: 'extra', href: '/db/user/{($)}' }
    ]
  }), // in case of gifts
  recipient: c.objectId({
    links: [
      { rel: 'extra', href: '/db/user/{($)}' }
    ]
  }),
  purchased: c.object({ title: 'Target', required: ['collection', 'original'] }, {
    collection: { enum: purchaseables },
    original: c.objectId({ title: 'Target Original' })
  }),
  created: c.date({ title: 'Created', readOnly: true }),
  archived: c.date({ description: 'Marks this record for automatic online archiving to cold storage by our cloud database.' })
})

c.extendBasicProperties(PurchaseSchema, 'purchase')

module.exports = PurchaseSchema

export const worklog = {
    name: 'worklog',
    title: 'Work Log',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'member',
            title: 'Member',
            type: 'reference',
            to: [{ type: 'groupMembers' }],
        },
        {
            name: 'entry',
            title: 'Entry',
            type: 'text',
        },
        {
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        },
        {
            name: 'timeSpent',
            title: 'Time Spent',
            type: 'string',
        },
    ],
}

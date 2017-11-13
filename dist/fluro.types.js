
//Create Fluro UI With dependencies
angular.module('fluro.types', []);
angular.module('fluro.types')
    .provider('TypeConfig', function() {


        //Define all of our Content Types
        var controller = {
            types: []
        };

        controller.types.push({
            singular: 'Role',
            plural: 'Roles',
            path: 'role',
            columns: [{
                title: 'Applications',
                key: 'applicationKeys'
            }],
            group: 'Permissions'
        })





        controller.types.push({
            singular: 'Post',
            plural: 'Posts',
            path: 'post',
            columns: [
                // {
                //     title: 'Parent',
                //     key: 'parent'
                // }
            ],
            group: 'Interactions'
        })

        controller.types.push({
            singular: 'Roster',
            plural: 'Rosters',
            path: 'roster',
            columns: [
                {
                    title: 'Event',
                    key: 'event'
                }
            ],
            group: 'Events'
        })


        // controller.types.push({
        //     singular: 'Ticketing',
        //     plural: 'Ticketing',
        //     path: 'ticketing',
        //     columns: [
        //     // {
        //     //     title: 'Parent',
        //     //     key: 'parent'
        //     // }
        //     ],
        //     group:'Events'
        // })

        // controller.types.push({
        //     singular: 'Ticket',
        //     plural: 'Tickets',
        //     path: 'ticketpurchase',
        //     columns: [
        //     {
        //         title: 'Primary Contact',
        //         key: 'contact'
        //     },
        //     // {
        //     //     title: 'Primary Contact',
        //     //     key: 'contact'
        //     // }
        //     ],
        //     group:'Events'
        // })

        /**
        controller.types.push({
            singular: 'View',
            plural: 'Views',
            path: 'view',
            group:'Config'
        })
        /**/

        controller.types.push({
            singular: 'Process',
            plural: 'Processes',
            path: 'process',
            columns: [{
                title: 'Current State',
                key: 'state'
            }, {
                title: 'Type',
                key: 'item._type'
            }, {
                title: 'Process Status',
                key: 'processStatus'
            },{
                title: 'Tasks',
                key: 'taskCount.incomplete',
                renderer:'number',
            }, {
                title: 'Assigned to',
                key: 'assignedTo',
                renderer:'contactAvatar',
                persist:true,
            }],
            filters: [{
                title: 'State',
                key: 'state'
            }, {
                title: 'Process Status',
                key: 'processStatus'
            }, {
                title: 'Type',
                key: 'item._type'
            }, {
                title: 'Assigned to',
                key: 'assignedTo',
            }],
            viewModes: ['process', 'default'],
            group: 'Contacts'
        });


        controller.types.push({
            singular: 'Mailout',
            plural: 'Mailouts',
            path: 'mailout',
            columns: [{
                title: 'State',
                key: 'state'
            }, {
                title: 'Definition',
                key: 'definition'
            }, {
                title: 'Publish Date',
                key: 'item.publishDate'
            }],
            filters: [{
                title: 'State',
                key: 'state'
            }],
            // viewModes: ['process', 'default'],
            group: 'Contacts'
        });





        controller.types.push({
            singular: 'Family Household',
            plural: 'Family Households',
            path: 'family',
            columns: [{
                title: 'Names',
                key: 'firstLine'
            }, {
                title: 'Address',
                key: 'address.addressLine1'
            }, {
                title: 'Suburb',
                key: 'address.suburb'
            }],
            viewModes: ['duplicates', 'map'],
            group: 'Contacts'
        })



        // controller.types.push({
        //     singular: 'Scheduled Task',
        //     plural: 'Scheduled Tasks',
        //     path: 'task',
        //     group:'Developer'
        // })

        controller.types.push({
            singular: 'Checkin',
            plural: 'Checkins',
            path: 'checkin',
            columns: [
                // {
                //         title: 'Event',
                //         key: 'event'
                //     }, {
                //         title: 'Contact',
                //         key: 'contact'
                //     },

                {
                    title: 'Check in date',
                    key: 'created',
                    renderer: 'date'
                }, {
                    title: 'Checked in time',
                    key: 'created',
                    renderer: 'time'
                }, {
                    title: 'Checked out',
                    key: 'checkout.0.date',
                    renderer: 'time'
                }
            ],
            group: 'Events'
        })

        controller.types.push({
            singular: 'Reaction',
            plural: 'Reactions',
            path: 'reaction',
            group: 'Config',
            columns: [
                {
                    title: 'Disabled',
                    key: 'deactivated',
                }, 
            ],
        })

        controller.types.push({
            singular: 'Access Pass',
            plural: 'Access Passes',
            path: 'policy',

            columns: [
                // {
                //     title: 'Permissions',
                //     key: 'permissionSets',
                //     renderer: 'permissionSet',
                // }, 
                // {
                //     title: 'Realm',
                //     key: 'realms'
                // },
                {
                    title: 'Status',
                    key: 'status'
                }
            ],
            group: 'Permissions'
        })

        controller.types.push({
            singular: 'Group / Team',
            plural: 'Groups / Teams',
            path: 'team',
            columns: [{
                    title: 'Provisional',
                    key: 'allowProvisional',
                },
                /**
                    {
                        title: 'Tags',
                        key: 'tags',
                        //renderer: 'multi'

                    }
                    /**/
            ],
            filters: [{
                    title: 'Provisional',
                    key: 'allowProvisional',
                },
                /**
        {
            title: 'Team members',
            key: 'assignments.contacts'
        },
       
        {
            title: 'Title',
            key: 'title'
        },

        {
            title: 'Assignment count',
            key: 'assignments'
        }
        /**/
            ],
            group: 'Contacts'
        })

        controller.types.push({
            singular: 'Plan',
            plural: 'Plans',
            path: 'plan',
            columns: [
                {
                    title: 'Time',
                    key: 'startDate',
                    renderer: 'time'
                }, {
                    title: 'Date',
                    key: 'startDate',
                    renderer: 'date'
                },
                {
                    title: 'Tags',
                    key: 'tags',
                    // //renderer: 'multi'

                }
            ],
            group: 'Events'
        })

        controller.types.push({
            singular: 'Code',
            plural: 'Code',
            path: 'code',
            columns: [{
                title: 'Syntax',
                key: 'syntax'
            }],
            filters: [{
                title: 'Syntax',
                key: 'syntax'
            }],
            group: 'Developer'
        })

        controller.types.push({
            singular: 'Component',
            plural: 'Components',
            path: 'component',
            /*columns: [{
            title: 'Syntax',
            key: 'syntax'
        }],
        filters: [{
            title: 'Syntax',
            key: 'syntax'
        }]*/
            group: 'Developer'
        })


        controller.types.push({
            singular: 'Query',
            plural: 'Queries',
            path: 'query',
            columns: [{
                title: 'Limit',
                key: 'limit'
            }],
            group: 'Developer'
        })


        // controller.types.push({
        //     singular: 'Notification',
        //     plural: 'Notifications',
        //     path: 'notification',
        //     // columns: [{
        //     //     title: 'Limit',
        //     //     key: 'limit'
        //     // }],
        //     group:'Config'
        // })

        controller.types.push({
            singular: 'Package',
            plural: 'Packages',
            path: 'package',
            group: 'Products',
        })

        controller.types.push({
            singular: 'Contact',
            plural: 'Contacts',
            path: 'contact',
            columns: [{
                    title: 'First Name',
                    key: 'firstName',
                    renderer: 'capitalize'
                }, {
                    title: 'Last Name',
                    key: 'lastName',
                    renderer: 'capitalize'
                }, {
                    title: 'Gender',
                    key: 'gender'
                }, {
                    title: 'Age',
                    key: 'dob',
                    renderer: 'age',
                }, {
                    title: 'Family Household',
                    key: 'family'
                },
                /**
            {
                title: 'Realms',
                key: 'realms',
                renderer: 'realm'
            }
/**/
            ],
            filters: [{
                title: 'Gender',
                key: 'gender'
            }],
            viewModes: ['duplicates'],
            group: 'Contacts',
        })

        controller.types.push({
            singular: 'Contact Details',
            plural: 'Contact Details',
            path: 'contactdetail',
            columns: [{
                title: 'First Name',
                key: 'contact.firstName'
            }, {
                title: 'Last Name',
                key: 'contact.lastName'
            }],
            group: 'Contacts',
        })



        controller.types.push({
            singular: 'Purchase',
            plural: 'Purchases',
            path: 'purchase',
            columns: [{
                    title: 'Purchased By',
                    renderer: 'purchaser',
                }, {
                    title: 'Licenses',
                    key: 'license',
                    renderer: 'license',
                }, {
                    title: 'Managed Licenses',
                    key: 'managedLicense',
                    renderer: 'managedLicense',
                }, {
                    title: 'Collection Email',
                    key: 'collectionEmail'
                }, {
                    title: 'Expires',
                    key: 'expiryDate',
                    renderer: 'expiry'
                }, {
                    title: 'Renew',
                    key: 'renew',
                    renderer: 'boolean'
                },
                // {
                //     title: 'Renews',
                //     key: 'renew'
                // },
                {
                    title: 'Tags',
                    key: 'tags',
                    // //renderer: 'multi',
                }, {
                    title: 'Created',
                    key: 'created',
                    renderer: 'datetime',
                },
                // {
                //     title: 'Transaction',
                //     key: 'transactions._id'
                // }

            ],
            filters: [{
                title: 'Product',
                key: 'product'
            }, {
                title: 'Distributor',
                key: 'Distributor'
            }, {
                title: 'Tags',
                // key: 'tags'
            }],
            group: 'Products',
        })

        controller.types.push({
            singular: 'Product',
            plural: 'Products',
            path: 'product',
            columns: [{
                title: 'Amount',
                key: 'amount',
                renderer: 'currency',
            }, {
                title: 'Currency',
                key: 'currency',
            }, {
                title: 'Frequency',
                key: 'frequency',
            }, {
                title: 'Licenses',
                key: 'limit'
            }, {
                title: 'Purchases',
                key: 'stats.purchase',
                renderer: 'number',
            }],
            filters: [{
                title: 'License',
                key: 'license'
            }],
            group: 'Products',
        })

        controller.types.push({
            singular: 'Payment Method',
            plural: 'Payment Methods',
            path: 'method',
            columns: [{
                title: 'User',
                key: 'user'
            }, {
                title: 'Persona',
                key: 'persona'
            }, {
                title: 'Integration',
                key: 'integration'
            }],
            // filters: [{
            //     title: 'License',
            //     key: 'license'
            // }],
            group: 'Products',
        })


        controller.types.push({
            singular: 'Transaction',
            plural: 'Transactions',
            path: 'transaction',
            columns: [{
                    title: 'Name',
                    key: 'persona',
                    renderer: 'transactionUser',
                }, {
                    title: 'Email',
                    key: 'persona',
                    renderer: 'transactionEmail',
                }, {
                    title: 'Amount',
                    key: 'amount',
                    renderer: 'currency',
                }, {
                    title: 'Total',
                    key: 'total',
                    renderer: 'currency',
                }, {
                    title: 'Currency',
                    key: 'currency',
                }, {
                    title: 'Payment',
                    key: 'paymentStatus',
                    renderer: 'paymentStatus',
                }, {
                    title: 'Mode',
                    key: 'mode',
                    renderer: 'paymentMode',
                }, {
                    title: 'Date',
                    key: 'created',
                    renderer: 'datetime'
                },
                /**
            {
                title: 'Realms',
                key: 'realms',
                renderer: 'realm'
            }
/**/
            ],
            filters: [{
                title: 'Payment Status',
                key: 'paymentStatus',

            }, {
                title: 'Currency',
                key: 'currency'
            }, {
                title: 'Mode',
                key: 'mode'
            }],
            group: 'Products',
        })

        controller.types.push({
            singular: 'Application',
            plural: 'Applications',
            path: 'application',
            columns: [{
                    title: 'Type',
                    key: 'applicationType'
                },
                /**
            {
                title: 'Realms',
                key: 'realms',
                //renderer: 'multi'
            }
/**/
                {
                    title: 'Domain',
                    key: 'domain',
                }, {
                    title: 'API',
                    key: 'apipath',
                },
            ],
            group: 'Developer',
        })


        controller.types.push({
            singular: 'Integration',
            plural: 'Integrations',
            path: 'integration',
            columns: [{
                title: 'Module',
                key: 'module'
            }, ],
            filters: [{
                title: 'Module',
                key: 'module'
            }],
            group: 'Developer',
        })


        controller.types.push({
            singular: 'Interaction',
            plural: 'Interactions',
            path: 'interaction',
            columns: [
            // {
            //     title: 'First Name',
            //     key: 'contact.firstName',
            //     renderer: 'interactionFirstName',
            // }, {
            //     title: 'Last Name',
            //     key: 'contact.lastName',
            //     renderer: 'interactionLastName',
            // }, 
            {
                title: 'Contacts',
                key: 'contacts',
                renderer:'contacts',
            },
            {
                title: 'Event',
                key: 'event'
            }],
            group: 'Interactions',
        })

        controller.types.push({
            singular: 'Definition',
            plural: 'Definitions',
            path: 'definition',
            columns: [{
                    title: 'Type',
                    key: 'parentType'
                }, {
                    title: 'Machine Name',
                    key: 'definitionName'
                },
                /**
            {
                title: 'Realms',
                key: 'realms',
                //renderer: 'multi'

            }, 
/**/
            ],
            filters: [{
                title: 'Basic Type',
                key: 'parentType'
            }],
            group: 'Config',
        })

        controller.types.push({
            singular: 'Realm',
            plural: 'Realms',
            path: 'realm',
            group: 'Config',
            filters: [{
                title: 'Inheritable',
                key: 'inheritable'
            }],
            columns: [{
                title: 'Inheritable',
                key: 'inheritable'
            }],
            viewModes: ['tree', 'default'],
        })


        controller.types.push({
            singular: 'User Persona',
            plural: 'User Personas',
            path: 'persona',
            columns: [{
                title: 'Access Passes',
                key: 'policies'
            }, {
                title: 'Extra permissions',
                key: 'permissionSets',
                renderer: 'permissionSet',
            }, {
                title: 'User',
                key: 'username',
                renderer: 'userType',
            },
            {
                title: 'Last Login',
                key: 'lastLogin',
                renderer: 'datetime',
            }],
            filters: [{
                title: 'Access Passes',
                key: 'policies'
            }],
            group: 'Permissions',
        })

        controller.types.push({
            hideFromMenu: true,
            singular: 'User',
            plural: 'Users',
            path: 'user',
            columns: [
                /*{
            title: 'Roles',
            key: 'permissionSets',
            renderer: 'permissionSet',
        }, 
        */
                /**
                         {
                             title: 'Permission Policies',
                             key: 'policies'
                         }, {
                             title: 'Extra permissions',
                             key: 'permissionSets',
                             renderer: 'permissionSet',
                         }, 
                         
                         {
                             title: 'Realm',
                             key: 'realms'
                         },
                         /**/
                {
                    title: 'Email Address',
                    key: 'email'
                }, {
                    title: 'Account',
                    key: 'account'
                }, {
                    title: 'Status',
                    key: 'status'
                }
            ],
            filters: [{
                title: 'Policies',
                key: 'policies'
            }],
            group: 'Permissions',
        })



        controller.types.push({
            singular: 'Event',
            plural: 'Events',
            path: 'event',
            /*columns: [{
            title: 'Start Date',
            key: 'startDate',
            filter: 'date',
        },
        {
            title: 'Realms',
            key: 'realms',
            renderer:'multi',
        }],
        */
            filters: [{
                title: 'Locations',
                key: 'locations',
            }, {
                title: 'Rooms',
                key: 'rooms',
            }],
            viewModes: ['calendar', 'cards', 'tracks'],
            group: 'Events',
        })






        controller.types.push({
            singular: 'Location',
            plural: 'Locations',
            path: 'location',
            columns: [{
                title: 'Address',
                key: 'addressLine1'
            }, {
                title: 'Suburb',
                key: 'suburb'
            }, {
                title: 'State',
                key: 'state'
            }, {
                title: 'Country',
                key: 'country'
            }, ],
            filters: [{
                title: 'State',
                key: 'state'
            }, {
                title: 'Country',
                key: 'country'
            }],
            viewModes: ['map'],
            group: 'Events',
        })

        // controller.types.push({
        //     singular: 'Endpoint',
        //     plural: 'Endpoints',
        //     path: 'endpoint',
        // })

        controller.types.push({
            singular: 'Account',
            plural: 'Accounts',
            path: 'account',
            group: 'Developer',
            columns: [{
                title: 'Created',
                key: 'created',
                renderer: 'datetime',
            }],
            filters: [{
                title: 'Inherits from',
                key: 'parentAccounts',
                // renderer: 'datetime',
            }],
        });

        controller.types.push({
            // sub:'application',
            singular: 'Onboarding Gateway',
            plural: 'Onboarding Gateways',
            path: 'onboard',
            group: 'Developer',
        });

        controller.types.push({
            hideFromMenu: true,
            singular: 'Assignment',
            plural: 'Assignments',
            path: 'assignment',
            columns: [{
                title: 'Event',
                key: 'event'
            },{
                title: 'Roster',
                key: 'roster'
            }, {
                title: 'Contact',
                key: 'contact'
            }],
            group: 'Events'
        })


        controller.types.push({
            hideFromMenu: true,
            singular: 'Storefront',
            plural: 'Storefronts',
            path: 'storefront',
            // columns: [{
            //     title: 'Event',
            //     key: 'event'
            // }, {
            //     title: 'Contact',
            //     key: 'contact'
            // }],
            group: 'Products'
        })


        controller.types.push({
            sub: 'application',
            // hideFromMenu: true,
            singular: 'Deployment',
            plural: 'Deployments',
            path: 'deployment',
            columns: [{
                title: 'Distribution Key',
                key: 'distributionKey'
            }, {
                title: 'Revision',
                key: 'commitID'
            }],
            group: 'Developer'
        })



        controller.types.push({
            sub: 'contact',
            // hideFromMenu: true,
            singular: 'Capability',
            plural: 'Capabilities',
            path: 'capability',
            group: 'Contact'
        })

        controller.types.push({
            singular: 'Collection',
            plural: 'Collections',
            path: 'collection',
            columns: [{
                title: 'Items',
                key: 'items.length'
            }],
            group: 'Content',
        })

        controller.types.push({
            singular: 'Article',
            plural: 'Articles',
            path: 'article',
            columns: [{
                    title: 'Author',
                    key: 'author.name'
                }
                // , {
                //     title: 'Tags',
                //     key: 'tags',
                //     //renderer: 'multi',
                // },
                /**
            {
                title: 'Realms',
                key: 'realms',
                //renderer: 'multi',
            }
/**/
            ],
            group: 'Content',
        })



        controller.types.push({
            // hideFromMenu: true,
            // sub:'event',
            singular: 'Attendance Headcount',
            plural: 'Attendance Headcounts',
            path: 'attendance',
            columns: [{
                    title: 'Posted by',
                    key: 'managedAuthor',
                }, {
                    title: 'Event',
                    key: 'event',
                }, {
                    title: 'Count',
                    key: 'count',
                },
            ],
            columns: [{
                    title: 'Creator',
                    key: 'managedAuthor'
                }
            ],
            group: 'Events',
        })


        controller.types.push({
            // sub: 'event',
            // hideFromMenu: true,
            singular: 'Event Track',
            plural: 'Event Tracks',
            path: 'eventtrack',
            // filters: [{
            //     title: 'Locations',
            //     key: 'locations',
            // }, {
            //     title: 'Rooms',
            //     key: 'rooms',
            // }],
            // viewModes: ['calendar', 'cards'],
            columns: [{
                title: 'Default Start Time',
                key: 'defaultStartTime'
            }],
            group: 'Events',
        })

        controller.types.push({
            singular: 'Asset',
            plural: 'Assets',
            path: 'asset',
            columns: [{
                    title: 'File Type',
                    key: 'extension'
                }, {
                    title: 'Tags',
                    key: 'tags',
                    // //renderer: 'multi',
                },
                /**
            {
                title: 'Realms',
                key: 'realms',
                //renderer: 'multi',
            }, 
/**/
            ],
            filters: [{
                title: 'File Type',
                key: 'extension'
            }],
            group: 'Files',
        })

        controller.types.push({
            singular: 'Tag',
            plural: 'Tags',
            path: 'tag',
            filters: [{
                title: 'Type',
                key: 'restrictType'
            }],
            columns: [
                /**
            {
                title: 'Realms',
                key: 'realms',
                //renderer: 'multi',
            },
            /**/
                {
                    title: 'Author',
                    key: 'author.name'
                }
            ],
            group: 'Content',
        })

        controller.types.push({
            singular: 'Image',
            plural: 'Images',
            path: 'image',
            columns: [{
                    title: 'Dimensions',
                    key: 'width',
                    renderer: 'dimensions',
                }, {
                    title: 'Tags',
                    key: 'tags',
                    // //renderer: 'multi',
                },
                /**
            {
                title: 'Realms',
                key: 'realms',
                //renderer: 'multi',
            }, 
/**/
                {
                    title: 'Size',
                    key: 'filesize',
                    renderer: 'filesize',
                }, {
                    title: 'Security',
                    key: 'privacy',
                    renderer: 'privacy',
                }
            ],
            filters: [{
                title: 'Asset Type',
                key: 'assetType'
            }],
            viewModes: ['grid'],
            group: 'Files',
        })

        controller.types.push({
            singular: 'Audio',
            plural: 'Audio',
            path: 'audio',
            columns: [{
                    title: 'Duration',
                    key: 'duration',
                },
                /**
                {
                    title: 'Realms',
                    key: 'realms',
                    //renderer: 'multi',
                }, 
/**/
                {
                    title: 'File Type',
                    key: 'extension'
                }, {
                    title: 'Size',
                    key: 'filesize',
                    renderer: 'filesize',
                }, {
                    title: 'Security',
                    key: 'privacy',
                    renderer: 'privacy',
                },

            ],
            filters: [{
                title: 'File Type',
                key: 'extension'
            }, {
                title: 'Asset Type',
                key: 'assetType'
            }],
            group: 'Files',
        })

        controller.types.push({
            singular: 'Video',
            plural: 'Videos',
            path: 'video',
            columns: [{
                    title: 'File Type',
                    key: 'extension'
                }, {
                    title: 'Dimensions',
                    key: 'width',
                    renderer: 'dimensions',
                }, {
                    title: 'Duration',
                    key: 'duration',
                    renderer: 'duration',
                },
                /**
            {
                title: 'Realms',
                key: 'realms',
                //renderer: 'multi',
            },
            /**/
                {
                    title: 'Size',
                    key: 'filesize',
                    renderer: 'filesize',
                }, {
                    title: 'Security',
                    key: 'privacy',
                    renderer: 'privacy',
                }
            ],
            filters: [{
                title: 'File Type',
                key: 'extension'
            }, {
                title: 'Asset Type',
                key: 'assetType'
            }],
            viewModes: ['grid'],
            group: 'Files',
        })

        controller.types.push({
            singular: 'Site',
            plural: 'Sites',
            path: 'site',
            columns: [
                /**
            {
                title: 'Realms',
                key: 'realms',
                //renderer: 'multi',
            }, 
            /**/
            ],
            group: 'Developer',
        })

        controller.types.push({
            sub: 'component',
            singular: 'Site Block',
            plural: 'Site Blocks',
            path: 'siteblock',
            columns: [
                /**
            {
                title: 'Realms',
                key: 'realms',
                //renderer: 'multi',
            }, 
            /**/
            ],
            group: 'Developer',
        })

        /////////////////////////////////////

        return {
            $get: function() {
                return controller;
            }
        };
    })


.service('TypeService', ['$q', 'Fluro', 'FluroContent', 'FluroAccess', 'TypeConfig', '$resource', function($q, Fluro, FluroContent, FluroAccess, TypeConfig, $resource) {

    var controller = {};

    ///////////////////

    controller.types = TypeConfig.types;

    ///////////////////

    controller.allTypes = function() {
        return [].concat(controller.types, controller.definedTypes);
    }

    ///////////////////

    controller.getTypeFromPath = function(path) {
        var primitive = _.find(TypeConfig.types, {
            path: path
        });

        if (primitive) {
            return primitive;
        } else {

            var defined = _.find(controller.definedTypes, {
                definitionName: path
            });

            if (defined) {
                return {
                    singular: defined.title,
                    plural: defined.plural,
                    path: defined.definitionName,
                    parentType: defined.parentType,
                }
            }

        }
    }

    ///////////////////

    controller.isBasicType = function(typeName) {
        return _.some(controller.types, function(type) {
            return type.path == typeName;
        })
    }

    ///////////////////

    controller.sideLoadDefinition = function(definition) {


        if (controller.definedTypes) {

            // console.log('Side Load Definition', definition, 'AND', controller.definedTypes)

            var exists = _.some(controller.definedTypes, function(type) {
                return type._id == definition._id
            });

            if (!exists) {
                // console.log('Side loaded', definition)
                controller.definedTypes.push(definition);
                controller.refreshMenuTree();
            }

        }
    }

    ///////////////////

    controller.refreshDefinedTypes = function() {

        // //console.log('Refresh defined types')
        //if (controller.definedTypes) {
        //   return controller.definedTypes;
        //}


        //Make a new request
        controller.definedTypes = FluroContent.endpoint('defined', true, true).query({
            allDefinitions: true,
        });

        //Create the refresh request
        //controller.refreshRequest = true;

        //Clean up once done
        controller.definedTypes.$promise.then(function(ty) {
            // //console.log('Git defined types', ty)
            controller.refreshMenuTree();
            //delete controller.refreshRequest;
        })

        return controller.definedTypes;

    }

    ///////////////////

    controller.requiredBasicTypes = function() {

        return _.map(controller.definedTypes, function(def) {
            return def.parentType;
        })

    }


    ///////////////////

    controller.refreshMenuTree = function() {


        var grouped = _.groupBy(controller.definedTypes, function(defined) {
            return defined.parentType;
        });

        ///////////////////////////////////////////////////////////

        /**
        $scope.thread = _.chain(res)
                    .map(function(post) {

                        // //console.log('POST', post._id, post.reply);
                        //Find all replies to this post
                        post.thread = _.filter(allPosts, function(sub) {
                            return (sub.reply == post._id);
                        });

                        // //console.log('THREAD TEST', post.thread);

                        // //console.log('find all replies that match', post._id)

                        //If it's a top level post then send it back
                        if(!post.reply) {
                            return post;
                        }
                    })
                    .compact()
                    .value();


                    /**/

        // //console.log('GROUPEd', grouped, controller.definedTypes);

        var allTypes = _.filter(controller.types, function(type) {
            return !type.hideFromMenu && !type.sub;
        });

        controller.menuTree = _.chain(allTypes).map(function(type) {

                var children = [];

                //////////////////////////////////////////////////

                // //Add any submenu items
                var subChildren = _.filter(controller.types, function(typeEntry) {
                    return (typeEntry.sub == type.path);
                });

                children = children.concat(subChildren);

                // if(subChildren && subChildren.length) {
                //     children = children.concat(subChildren);
                // }

                //////////////////////////////////////////////////

                //Then append all the child types
                children = children.concat(grouped[type.path]);


                //////////////////////////////////////////////////

                children = _.chain(children)
                    .compact()
                    .filter(function(child) {

                        // //console.log('Test child', child);
                        var yes = FluroAccess.canAccess(child.definitionName, child.parentType);

                        if(child.systemOnly) {
                            // console.log('TESSSSING', child)
                            return false;
                        }
                        // //console.log('CAN ACCESS?', child.definitionName, yes);

                        return yes;
                    })
                    .value();



                ////////////////////////////////////////////////////

                var canAccess = FluroAccess.canAccess(type.path);
                type.children = children; //_.compact(children);

                ////////////////////////////////////////////////////

                //Add the basic type to the top if you can access the top item
                if (canAccess && type.children.length) {
                    type.children.unshift(type);
                }



                ////////////////////////////////////////////////////

                if (canAccess || (type.children && type.children.length)) {
                    // //console.log('Can access', type.path, 'because of ', type.children.length)
                    return type;
                } else {
                    // //console.log('Cant access', type.path, 'because')
                    return null;
                }
            })
            .compact()
            /**
            .groupBy(function(item) {
                return item.group;
            })
            .reduce(function(results, group, key) {

                var section = {
                    title:key,
                    items:group,
                }
                results.push(section);

                return results;

            }, [])
            .sortBy(function(section) {
                return section.title;
            })
            /**/
            .value();

        // //console.log('GROUP MENU TREE', controller.menuTree)

    }

    ///////////////////

    controller.getIcon = function(type) {
        if (type.parentType) {
            return type.parentType;
        } else {
            return type.path;
        }
    }

    ///////////////////

    controller.getAllCreateableTypes = function() {

        var primitives = _.chain(controller.types)
            .filter(function(type) {
                return FluroAccess.can('create', type.path);
            })
            .map(function(type) {
                type.icon = type.path;
                return type;
            })
            .value();

        var defined = _.chain(controller.definedTypes)
            .filter(function(type) {
                return FluroAccess.can('create', type.definitionName);
            })
            .each(function(type) {
                type.singular = type.title;
                type.path = type.definitionName;
                type.icon = type.parentType;
            })
            .value();

        return primitives.concat(defined);
    }


    ///////////////////

    controller.getSubTypes = function(parentType) {

        return _.filter(controller.definedTypes, function(type) {
            return type.parentType == parentType;
        })
    }




    ///////////////////

    return controller;
}]);
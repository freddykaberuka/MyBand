import dotenv from 'dotenv';
dotenv.config();

let config ={
  swagger:'2.0',
  info:{
      description:'myBrand',
      version:"1.0.0",
      title:'myBrand',
      contact:{
        email:"freddykaberuka2009@gmail.com"
      },
  },
  host: process.env.URL,
  basePath:'/',
  schemes:[
      'https',
  ],
  paths:{
    '/api/v1/articles':{
      get:{
        tags:[
          'articles'
        ],
        summary:['listing all Articles'],
          description:'listing all Articles',
          produces:[
              'application/json',
          ],
          responses:{
              200:{
                  description:'list all articles',
              },
              500:{
                  description:'server error',
              },
              404:{
                description:'data not found',
            }
          }
      }},
   
'/api/v1/articles/':{
  post:{
        tags:[
            'articles'
        ],
        summary:['post query'],
        parameters:[
          {
            name:'authorization',
            in:'header'
            },
            {
              in: "formData",
              name: "title",
              description: "title",
              type: "string"
              },
              {
                in: "formData",
                name: "bodie",
                description: "body",
                type: "string"
                },
                {
                  in: "formData",
                  name: "conclusion",
                  description: "conclusion",
                  type: "string"
                  },
                  {
                    in: "formData",
                    name: "img",
                    description: "image",
                    type: "file"
                  },
             
        ],
        responses:{
          201:{
              description:'message sent',
          },
          500:{
              description:'server error',
          },
          404:{
            description:'data not found',
        }
      }
        
  },

},
'/api/v1/articles/{articleid}':{
  parameters:[
    {       
      name:'articleid',
      in:'path',
      required:true,
    },
    {
      name:'authorization',
      in:'header',
      },
    ],
  get:{
    tags:[
      'articles'
    ],
    summary:['listing single Article'],
      description:'listing single Article',
      produces:[
          'application/json',
      ],
      responses:{
          200:{
              description:'selected by id',
          },
          500:{
              description:'server error',
          },
          404:{
            description:'data not found',
        }
      }
  }, 
  
delete:{
tags:[
'articles'
],
summary:['delete Article'],
description:'delete Article',
produces:[
    'application/json',
],
responses:{
    200:{
        description:'article deleted successful',
    },
    500:{
        description:'server error',
    },
    404:{
      description:'data not found',
  }
}
},
},


  '/api/v1/contacts/':{
    post:{
          tags:[
              'contacts'
          ],
          summary:['post query'],
          parameters:[
            {
              name:'user queries',
              in:'body',
              required: true,
              schema:{
                example:{
                  name:'trojan',
                  email:'trojanx@mail.com',
                  subject:'hello t',
                  comment:'exist'
                  }
                }
              },
              {
                in: "formData",
                name: "articleName",
                description: "articleName",
                type: "string"
                },
               
          ],
          responses:{
            201:{
                description:'message sent',
            },
            500:{
                description:'server error',
            },
            404:{
              description:'data not found',
          }
        }
          
    },
  
  },
  '/api/v1/contacts':{
    get:{
      tags:[
        'contacts'
    ],
    summary:['get all query'],
      description:'get all queries',
      produces:[
          'application/json',
      ],
      parameters:[
        {       
          name:'authorization',
          in:'header'
        },],
      responses:{
            200:{
                description:'listing all data from database',
            },
            401:{
              description:'Auth failed',
          },
            500:{
                description:'server error',
            },
            404:{
              description:'data not found',
          }
        }
    }
  },
  '/api/v1/contacts/{contactid}':{
    parameters:[
          {       
            name:'authorization',
            in:'header'
          },
          {       
            name:'contactid',
            in:'path',
            required:true,
          }
          ],
    delete:{
      tags:[
        'contacts'
    ],
    summary:['delete query'],
        description:'delete query',
        produces:[
            'application/json',
        ],
        responses:{
            200:{
                description:'Article deleted successful',
            },
            500:{
                description:'server error',
            },
            401:{
              description:'Auth failed',
          },
            404:{
              description:'data not found',
          }
        }
    },
    get:{
      tags:[
        'contacts'
    ],
    summary:['get list of queries'],
        description:'get single query',
        produces:[
            'application/json',
        ],
        responses:{
            200:{
                description:'selected by id',
            },
            500:{
                description:'server error',
            },
            401:{
              description:'Auth failed',
          },
            404:{
              description:'data not found',
          }
        }
    }
  },
   
 

  
   //signup start

 '/api/v1/user/signup':{
  post:{
      tags:[
          'authentication'
      ],
      parameters:[
          {
              name:'users information',
              in:'body',
              required: true,
              schema:{
                  example:{
                      email:'dodo@gmail.com',
                      password:'password1'
                  }
              }
          }

      ],
      consumes:[
          'application/json',
      ],
       produces:[
           'application/json',
       ],
       responses:{
           201:{
               description:'user registered',
           },
           500:{
               description:'server error',
           },
           
           409:{
            description:'this email alread exist',
        }
       }
   }

},
  '/api/v1/user/login':{
            
    post:{
        tags:[
            'authentication'
        ],
        parameters:[
            {
                name:'users credential',
                in:'body',
                required: true,
                schema:{
                    example:{
                      email:'dodo@gmail.com',
                      password:'password1'

                    }
                }
            }

        ],
        consumes:[
            'application/json',
        ],
         produces:[
             'application/json',
         ],
         responses:{
             200:{
                 description:'user authorized',
             },
             500:{
                 description:'server error',
             },
             401:{
                 description:'Auth failed',
             }
         }
     }
 },


//comment on Article
'/api/v1/articles/{articleid}/comments':{
  get:{
    tags:[
      'Article Comments'
  ],
  parameters:[
    {
      name:'authorization',
      in:'header'
      },
      {
        in:'path',
        name:'articleid',
        required:true,
    }],
  summary:['get list of specific article\'s comment'],
      description:'get comments',
      produces:[
          'application/json',
      ],
      responses:{
          200:{
              description:'listing all comment',
          },
          500:{
              description:'server error',
          },
          401:{
            description:'Auth failed',
        },
          404:{
            description:'data not found',
        }
      }
    },
  post:{
        tags:[
            'Article Comments'
        ],
        summary:['post Comment'],
        parameters:[
          {
            name:'authorization',
            in:'header'
            },
            {
              in:'path',
              name:'articleid',
              required:true,
          },
            {
              in: "formData",
              name: "email",
              description: "email",
              type: "string"
              },
              {
                in: "formData",
                name: "comment",
                description: "comment",
                type: "string"
                },
                
             
        ],
        responses:{
          201:{
              description:'post created',
          },
          500:{
              description:'server error',
          },
          404:{
            description:'data not found',
        },
        401:{
          description:'Auth failed',
      }
      }
        
  },

}
},
// '/api/v1/articles/{articleid}':{
//   parameters:[
//     { 
//         name:'Authorization',
//         in:'header',
//       },
//                 {   
//       name:'articleid',
//       in:'path',
//       required:true,
//     }
//     ],
// patch:{
//   tags:[
//     'articles'
//   ],
//   paramaters:[
//       {
//           in:'formData',
//           name:'title',
//           description:'title',
//           type:'string'
//       },
//       {
//           in:'path',
//           name:'articleid',
//       },
//       {
//           in:'formData',
//           name:'bodie',
//           description:'article body',
//           type:'string'
//       },
//       {
//           in:'formData',
//           name:'conclusion',
//           description:'article conclusion',
//           type:'string'
//       },
//       {
//           in:'formData',
//           name:'img',
//           description:'article image',
//           type:'file'
//       }

//   ],
//   summary:['update Article'],
//     description:'update Article',
//     produces:[
//         'application/json',
//     ],
//     responses:{
//         201:{
//             description:'article updated successful',
//         },
//         500:{
//             description:'server error',
//         },
//         404:{
//           description:'data not found',
//       },
//       401:{
//           description:'Auth failed',
//       }
//     }
//   },
// },
}
export default config;
db.test.insertMany([
    {
        id:'1',
        tipo:'camara sony',
        precio:147, 
        unidades_vendidas:22,
        fecha_venta:new Date('2020-7-12'),
        cliente:'el corte ingles'
    },
    {
        id:'2',
        tipo:'camara samsung',
        precio:130,
        unidades_vendidas:13,
        fecha_venta:new Date('2020-3-17'), 
        cliente:'carrefour'
    },
    {
        id:'3',
        tipo:'camara samsung',
        precio:124,
        unidades_vendidas:7,
        fecha_venta:new Date('2020-10-4'),
        cliente:'juan electronica'
    },
    {
        id:'4',
        tipo:'camara lg',
        precio:112, 
        unidades_vendidas:8,
        fecha_venta:new Date('2020-8-9'),
        cliente:'media mark'
    },
    {
        id:'5',
        tipo:'camara xiaomi',
        precio:95,
        unidades_vendidas:30,
        fecha_venta:new Date('2020-6-22'),
        cliente:'pc componentes'
    },
    {
        id:'6',
        tipo:'camara apple',
        precio:150,
        unidades_vendidas:23,
        fecha_venta:new Date('2020-1-13'),
        cliente:'amazon'
    },
    {
        id:'7',
        tipo:'camara lg',
        precio:110,
        unidades_vendidas:3,
        fecha_venta:new Date('2020-12-1'),
        cliente:'juan electronica'
    },
    {
        id:'8',
        tipo:'camara xiaomi',
        precio:100, 
        unidades_vendidas:30,
        fecha_venta: new Date('2020-2-4'),
        cliente:'ebay'
    }])
    db.test.aggregate(
        [
             { $match :
                 { tipo : 'camara samsung' }
            }
        ]
    );
    db.test.aggregate(
        [
          {$match:{tipo:'camara lg'}},
            {$group:
              {
                _id: { precio: { precio: "$precio"}, unidades_vendidas: { unidades: "$unidades_vendidas" } },
                ganancias_totales: { $sum:{$multiply: [ "$unidades_vendidas",'$precio'] } }
            
              }
          }
        ]
     )
    db.test.aggregate(
        [{$match:
            {cliente:'juan electronica'}
         },
         {$group:
            {
            _id:{cliente:{cliente:'$cliente'},tipo:{tipo:'$tipo'}},
            media:{$sum:{$divide:['$precio','$unidades_vendidas']}}

            }}

        ]
    ) 
    db.test.aggregate(
        [{$match:
            {unidades_vendidas:30}
        },
        {$group:
            {
            _id:{precio:{precio:'$precio'}},tipo:{tipo:'$tipo'}},
            avg:{$sum:{$multiply: [ "$unidades_vendidas",'$precio'] } }
        }
    ]
    )
     

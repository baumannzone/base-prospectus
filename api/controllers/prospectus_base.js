'use strict';
/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document
 */
module.exports = {
  getProspectus,
  createProspectus,
  getProspectusById,
};

function getProspectus( req, res, next ) {
  const items = [
    {
      baseProspectusId: '1234jahsdg3',
      numRegRequest: 'Reg001',
      issuingBank: 'BBVA',
      registrationDate: '28/03/2018',
      nominalMax: 276000,
      isValid: true,
      isValidStatus: 'Active',
      authorized: [
        {
          id: '11848600w',
          name: 'Jorge Baumann',
        },
        {
          id: 'B4D455',
          name: 'Julio Iglesias',
        },
      ],
      documentation: {
        url: 'link',
        date: '28/03/2018',
        user: 'Kate Cook',
      },
    },
    {
      baseProspectusId: 'h372612raKJ',
      numRegRequest: 'Reg002',
      issuingBank: 'Caixa',
      registrationDate: '27/03/2018',
      nominalMax: 350000,
      isValid: true,
      isValidStatus: 'Active',
      authorized: [
        {
          id: '4NDUK0W1t',
          name: 'John Cobra',
        },
        {
          id: 'L45P47M45',
          name: 'Er Batu',
        },
      ],
      documentation: {
        url: 'link',
        date: '27/03/2018',
        user: 'Kate Cook',
      },
    },
  ];
  res.json( items );
}

function createProspectus( req, res ) {
  res.json( { message: 'Folleto Base creado' } );
}

function getProspectusById( req, res, next ) {
  const item = {
    baseProspectusId: 'h372612raKJ',
    numRegRequest: 'Reg002',
    issuingBank: 'Caixa',
    registrationDate: '27/03/2018',
    nominalMax: 350000,
    isValid: true,
    isValidStatus: 'Active',
    authorized: [
      {
        id: '4NDUK0W1t',
        name: 'John Cobra',
      },
      {
        id: 'L45P47M45',
        name: 'Er Batu',
      },
    ],
    documentation: {
      url: 'link',
      date: '27/03/2018',
      user: 'Kate Cook',
    },
  };
  res.json( item );
}

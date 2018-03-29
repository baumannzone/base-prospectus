const should = require( 'should' );
const request = require( 'supertest' );
const server = require( '../../../app' );

describe( 'controllers', function () {

  describe( 'prospectus_base', function () {

    describe( 'GET /getProspectus', function () {

      it( 'Should return an array of 2 items', function ( done ) {

        request( server )
          .get( '/regulator/baseProspectus' )
          .set( 'Accept', 'application/json' )
          .expect( 'Content-Type', /json/ )
          .expect( 200 )
          .end( function ( err, res ) {
            should.not.exist( err );
            res.body.length.should.eql( 2 );
            done();
          } );
      } );
    } );

    describe( 'GET /getProspectus/{id}', function () {
      it( 'Should have correct keys', function ( done ) {

        request( server )
          .get( '/regulator/baseProspectus/jh2g761' )
          .query( { name: 'Scott' } )
          .set( 'Accept', 'application/json' )
          .expect( 'Content-Type', /json/ )
          .expect( 200 )
          .end( function ( err, res ) {
            should.not.exist( err );
            res.body.should.have.keys(
              'baseProspectusId',
              'numRegRequest',
              'issuingBank',
              'registrationDate',
              'nominalMax',
              'isValid',
              'isValidStatus',
              'authorized',
              'documentation',
            );

            done();
          } );
      } );
    } );

  } );

} );

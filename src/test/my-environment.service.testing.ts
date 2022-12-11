import { MyEnvironmentSearch, SearchType } from './../app/shared/models/my-environment-search/my-environment-search.model';
import { Observable, of } from 'rxjs';

export class MyEnvironmentTestingService {

  getResults(businessModelSearch: MyEnvironmentSearch): Observable<any> {

    switch (businessModelSearch.searchType) {
      case SearchType.LARGE_ESTABLISHMENTS:
        return of(
          {
            "results": [
              {
                "name": "Comercial Gallo S.A.",
                "web": "https://www.pastasgallo.es",
                "email": null,
                "phone": null,
                "activities": [
                  {
                    "activityId": 1008031,
                    "activityName": "Delegacions - oficines comercials"
                  },
                  {
                    "activityId": 107001,
                    "activityName": "Alimentació i begudes"
                  },
                  {
                    "activityId": 29297307,
                    "activityName": "Com.may.ptos.alimentic.bebidas y tabacos"
                  }
                ],
                "addresses": [
                  {
                    "street_name": "Av Diagonal",
                    "street_number": "468",
                    "zip_code": "08006",
                    "district_id": "06",
                    "town": "BARCELONA",
                    "location": {
                      "x": 41.3960267590958,
                      "y": 2.156419427782995
                    }
                  }
                ]
              },
              {
                "name": "Pompadour Ibérica S.A.",
                "web": "http://www.pompadour.es",
                "email": null,
                "phone": null,
                "activities": [
                  {
                    "activityId": 1008031,
                    "activityName": "Delegacions - oficines comercials"
                  },
                  {
                    "activityId": 107001,
                    "activityName": "Alimentació i begudes"
                  }
                ],
                "addresses": [
                  {
                    "street_name": "C Sicília",
                    "street_number": "372*374",
                    "zip_code": "08025",
                    "district_id": "06",
                    "town": "BARCELONA",
                    "location": {
                      "x": 41.4052142952385,
                      "y": 2.1695969647394997
                    }
                  }
                ]
              }
            ]
          }
        );
      case SearchType.MARKETS_AND_FAIRS:
        return of(
          {
            "results": [
              {
                "name": "Fira d'Artesania Popular Catalana *Plaça Eivissa",
                "web": null,
                "email": null,
                "phone": null,
                "activities": [
                  {
                    "activityId": 1011011,
                    "activityName": "Mercats i fires al carrer"
                  },
                  {
                    "activityId": 29811720,
                    "activityName": "Artesania"
                  },
                  {
                    "activityId": 112024,
                    "activityName": "AG - EQ  (Duplicats a l'agenda:  Fires i petis mercats)"
                  }
                ],
                "addresses": [
                  {
                    "street_name": "Pl Eivissa",
                    "street_number": "1",
                    "zip_code": "08032",
                    "district_id": "07",
                    "town": "BARCELONA",
                    "location": {
                      "x": 41.429928949592345,
                      "y": 2.161224943341931
                    }
                  }
                ]
              }
            ]
          }
        );
      case SearchType.MUNICIPAL_MARKETS:
        return of(

          {
            "results": [
              {
                "name": "Mercat de Les Corts",
                "web": [
                  "https://www.facebook.com/Mercat-de-Les-Corts-582373918504247",
                  "http://www.barcelona.cat/mercats",
                  "http://mercatdelescorts.cat"
                ],
                "email": "mercatlescorts@bcn.cat",
                "phone": "667570336,934132318",
                "addresses": [
                  {
                    "street_name": "Travessera de les Corts",
                    "street_number": "215",
                    "zip_code": "08028",
                    "district_id": "04",
                    "town": "Barcelona",
                    "location": {
                      "x": 41.38407806063042,
                      "y": 2.1298048647400445
                    }
                  }
                ]
              }
            ]
          }

        );
      default:
        return new Observable();

    }
  }


  getEconomicActivities(businessModel: SearchType): Observable<any> {

    if (businessModel === 0) {
      return of(
        {
          "results": [
            {
              "activityId": 105001,
              "activityName": "Accessible per a persones amb discapacitat física"
            },
            {
              "activityId": 107001,
              "activityName": "Alimentació i begudes"
            },
            {
              "activityId": 30343758,
              "activityName": "Altres (targeta rosa) "
            },
            {
              "activityId": 110158,
              "activityName": "Amb cafeteria"
            },
            {
              "activityId": 110012,
              "activityName": "Amb restaurant"
            },
            {
              "activityId": 29812727,
              "activityName": "Anglès"
            },
            {
              "activityId": 32807720,
              "activityName": "Articles esportius"
            },
            {
              "activityId": 29808734,
              "activityName": "Bricolatge"
            },
            {
              "activityId": 54391845,
              "activityName": "Centres Comercials"
            },
            {
              "activityId": 29810744,
              "activityName": "Cinema"
            },
            {
              "activityId": 29304307,
              "activityName": "Com.may. juguetes y articulos deporte"
            },
            {
              "activityId": 29302309,
              "activityName": "Com.may. madera y corcho"
            },
            {
              "activityId": 29302311,
              "activityName": "Com.may. maquinaria para madera y metal"
            },
            {
              "activityId": 29302310,
              "activityName": "Com.may. materiales construccion"
            },
            {
              "activityId": 29299308,
              "activityName": "Com.may.ptos.perfumeria,drogueria"
            },
            {
              "activityId": 34296307,
              "activityName": "Com.men.grandes almacenes"
            },
            {
              "activityId": 32302308,
              "activityName": "Com.men.ptos.alimenticios menos 120 m2"
            },
            {
              "activityId": 32301311,
              "activityName": "Com.men.tabaco maquinas automaticas"
            },
            {
              "activityId": 32301307,
              "activityName": "Com.men.tabacos en expendiduria"
            },
            {
              "activityId": 32798719,
              "activityName": "DVD"
            },
            {
              "activityId": 32798724,
              "activityName": "Discos"
            },
            {
              "activityId": 107005,
              "activityName": "Electrodomèstics"
            },
            {
              "activityId": 32796760,
              "activityName": "Entrades"
            },
            {
              "activityId": 107015,
              "activityName": "Esports"
            },
            {
              "activityId": 1026022,
              "activityName": "Ferreteries"
            },
            {
              "activityId": 104021,
              "activityName": "Fotografia"
            },
            {
              "activityId": 29812725,
              "activityName": "Francès"
            },
            {
              "activityId": 43326349,
              "activityName": "Grans magatzems i establiments especialitzats"
            },
            {
              "activityId": 43326348,
              "activityName": "Hipermercats"
            },
            {
              "activityId": 119001,
              "activityName": "Horaris especials"
            },
            {
              "activityId": 107006,
              "activityName": "Imatge i so"
            },
            {
              "activityId": 107007,
              "activityName": "Informàtica i telecomunicació"
            },
            {
              "activityId": 1006045,
              "activityName": "Llibreries"
            },
            {
              "activityId": 32796754,
              "activityName": "Llibres"
            },
            {
              "activityId": 32799720,
              "activityName": "Maquinari"
            },
            {
              "activityId": 32799723,
              "activityName": "Material informàtic"
            },
            {
              "activityId": 32805726,
              "activityName": "Material per a la construcció"
            },
            {
              "activityId": 32804729,
              "activityName": "Moda dones"
            },
            {
              "activityId": 32804728,
              "activityName": "Moda homes"
            },
            {
              "activityId": 107012,
              "activityName": "Moda i tèxtil"
            },
            {
              "activityId": 66013073,
              "activityName": "Otras maquinas automaticas"
            },
            {
              "activityId": 32799721,
              "activityName": "Programari"
            },
            {
              "activityId": 37296308,
              "activityName": "Reparacion automoviles y bicicletas"
            },
            {
              "activityId": 37296315,
              "activityName": "Reparacion otros bienes consumo ncop"
            },
            {
              "activityId": 32805720,
              "activityName": "Sanejament"
            },
            {
              "activityId": 32799722,
              "activityName": "Telefonia"
            },
            {
              "activityId": 1008002,
              "activityName": "Venda"
            },
            {
              "activityId": 32798725,
              "activityName": "Videojocs"
            },
            {
              "activityId": 29810770,
              "activityName": "Vídeo"
            }
          ]
        }
      );
    } else if (businessModel === 1) {
      return of(
        {
          "results": [
            {
              "activityId": 29810738,
              "activityName": "Antiguitats i brocanteries"
            },
            {
              "activityId": 1008025,
              "activityName": "Galeries comercials"
            },
            {
              "activityId": 1006051,
              "activityName": "Galeries d'art"
            }
          ]
        }
      );

    } else {
      return of(
        {
          "results": [
            {
              "activityId": 107001,
              "activityName": "Alimentació i begudes"
            },
            {
              "activityId": 30699720,
              "activityName": "Alquiler de viviendas"
            },
            {
              "activityId": 30699721,
              "activityName": "Alquiler locales industriales"
            },
            {
              "activityId": 103909,
              "activityName": "Alquiler maq. y equipo contable"
            },
            {
              "activityId": 53646332,
              "activityName": "Arquitectura industrial"
            },
            {
              "activityId": 70313191,
              "activityName": "Artes graficas (impresion grafica)"
            },
            {
              "activityId": 32804746,
              "activityName": "Articles de joieria"
            },
            {
              "activityId": 1001001,
              "activityName": "Associacions"
            },
            {
              "activityId": 1007001,
              "activityName": "Bancs"
            },
            {
              "activityId": 35299312,
              "activityName": "Cafe-bar teatros y cines"
            },
            {
              "activityId": 32793722,
              "activityName": "Cafès"
            },
            {
              "activityId": 29817768,
              "activityName": "Certificació de productes o serveis"
            },
            {
              "activityId": 29810744,
              "activityName": "Cinema"
            },
            {
              "activityId": 29304308,
              "activityName": "Com.may. instrum. medicos y ortopedicos"
            },
            {
              "activityId": 29304307,
              "activityName": "Com.may. juguetes y articulos deporte"
            },
            {
              "activityId": 29304312,
              "activityName": "Com.may. libros, periodicos y revistas"
            },
            {
              "activityId": 29302314,
              "activityName": "Com.may. maquinas y material oficina"
            },
            {
              "activityId": 29302310,
              "activityName": "Com.may. materiales construccion"
            },
            {
              "activityId": 29298309,
              "activityName": "Com.may. prendas exteriores vestir"
            },
            {
              "activityId": 29300310,
              "activityName": "Com.may.apar.y mat. electronico"
            },
            {
              "activityId": 29304311,
              "activityName": "Com.may.art.papeleria y escritorio"
            },
            {
              "activityId": 29297312,
              "activityName": "Com.may.bebidas y tabaco"
            },
            {
              "activityId": 29302315,
              "activityName": "Com.may.interindustrial excep. quimica"
            },
            {
              "activityId": 29297315,
              "activityName": "Com.may.otro ptos.alimenticios,hel.,etc"
            },
            {
              "activityId": 29301312,
              "activityName": "Com.may.ptos. quimicos industriales"
            },
            {
              "activityId": 29297307,
              "activityName": "Com.may.ptos.alimentic.bebidas y tabacos"
            },
            {
              "activityId": 29298307,
              "activityName": "Com.may.ptos.textiles,confecc, y calzado"
            },
            {
              "activityId": 34296307,
              "activityName": "Com.men.grandes almacenes"
            },
            {
              "activityId": 33304310,
              "activityName": "Com.men.libros,periodicos,revistas."
            },
            {
              "activityId": 32299309,
              "activityName": "Com.men.ptos.pasteleria,bolleria"
            },
            {
              "activityId": 33296307,
              "activityName": "Com.men.ptos.textiles para el hogar"
            },
            {
              "activityId": 1025,
              "activityName": "Companyies de subministrament"
            },
            {
              "activityId": 67198241,
              "activityName": "Construccion completa, repar. y conserv."
            },
            {
              "activityId": 1026004,
              "activityName": "Consultories"
            },
            {
              "activityId": 1008031,
              "activityName": "Delegacions - oficines comercials"
            },
            {
              "activityId": 50843509,
              "activityName": "Distribuïdores: Cinema"
            },
            {
              "activityId": 29814720,
              "activityName": "Dret"
            },
            {
              "activityId": 1006044,
              "activityName": "Editorials"
            },
            {
              "activityId": 107010,
              "activityName": "Electrònica, electricitat, il·luminació"
            },
            {
              "activityId": 50844509,
              "activityName": "Empreses Exhibició"
            },
            {
              "activityId": 29803720,
              "activityName": "Ensenyament no reglat"
            },
            {
              "activityId": 63006068,
              "activityName": "Enseñanza form. profesional superior"
            },
            {
              "activityId": 63006067,
              "activityName": "Enseñanza formacion prof. no superior"
            },
            {
              "activityId": 1010002,
              "activityName": "Escoles"
            },
            {
              "activityId": 66007067,
              "activityName": "Exhibicion de peliculas cinematograficas"
            },
            {
              "activityId": 102911,
              "activityName": "Explotacion electronica por terceros"
            },
            {
              "activityId": 39893895,
              "activityName": "Fab. art. acabados materias plasticas"
            },
            {
              "activityId": 40896894,
              "activityName": "Fab. art. escritorio"
            },
            {
              "activityId": 70308194,
              "activityName": "Fab. cerveza y malta de cerveza"
            },
            {
              "activityId": 40493481,
              "activityName": "Fab. jabones comunes, detergentes, lejia"
            },
            {
              "activityId": 1591547,
              "activityName": "Fab. receptores radio, tv, y sonido"
            },
            {
              "activityId": 68308190,
              "activityName": "Fabricacion de tubos de acero"
            },
            {
              "activityId": 1008008,
              "activityName": "Fabricació"
            },
            {
              "activityId": 104021,
              "activityName": "Fotografia"
            },
            {
              "activityId": 64005068,
              "activityName": "Hospitales especializados"
            },
            {
              "activityId": 1027003,
              "activityName": "Immobiliàries"
            },
            {
              "activityId": 104800,
              "activityName": "Impressores"
            },
            {
              "activityId": 107007,
              "activityName": "Informàtica i telecomunicació"
            },
            {
              "activityId": 72309188,
              "activityName": "Intermediarios del comercio"
            },
            {
              "activityId": 29800721,
              "activityName": "Jocs"
            },
            {
              "activityId": 32800721,
              "activityName": "Llum"
            },
            {
              "activityId": 29806739,
              "activityName": "Matemàtiques"
            },
            {
              "activityId": 32815721,
              "activityName": "Material d'oficina"
            },
            {
              "activityId": 32799723,
              "activityName": "Material informàtic"
            },
            {
              "activityId": 107012,
              "activityName": "Moda i tèxtil"
            },
            {
              "activityId": 32804730,
              "activityName": "Moda nens"
            },
            {
              "activityId": 32813731,
              "activityName": "Màquines d'arts gràfiques, fotocopiadores"
            },
            {
              "activityId": 14104799,
              "activityName": "Màquines de cafè"
            },
            {
              "activityId": 65058972,
              "activityName": "Oficines"
            },
            {
              "activityId": 49841510,
              "activityName": "Oficines - Despatxos"
            },
            {
              "activityId": 114004,
              "activityName": "Oficines centrals"
            },
            {
              "activityId": 1026019,
              "activityName": "Oficines tècniques (d'empreses privades)"
            },
            {
              "activityId": 104799,
              "activityName": "Ordinadors"
            },
            {
              "activityId": 72315196,
              "activityName": "Otras reparaciones ncop"
            },
            {
              "activityId": 71799836,
              "activityName": "Otros art. acabados en metales ncop"
            },
            {
              "activityId": 28707728,
              "activityName": "Otros servicios independientes ncop"
            },
            {
              "activityId": 28701728,
              "activityName": "Otros servicios tecnicos ncop"
            },
            {
              "activityId": 32815720,
              "activityName": "Paper"
            },
            {
              "activityId": 107011,
              "activityName": "Perfumeria, cosmètica, estètica"
            },
            {
              "activityId": 104801,
              "activityName": "Perifèrics"
            },
            {
              "activityId": 33899894,
              "activityName": "Prep. y envasado de aguas minerales"
            },
            {
              "activityId": 107024,
              "activityName": "Productes de drogueria"
            },
            {
              "activityId": 107019,
              "activityName": "Productes químics"
            },
            {
              "activityId": 27701721,
              "activityName": "Promocion de edificaciones"
            },
            {
              "activityId": 1006080,
              "activityName": "Promotores"
            },
            {
              "activityId": 32804724,
              "activityName": "Roba de la llar"
            },
            {
              "activityId": 67006068,
              "activityName": "Salones e institutos de belleza"
            },
            {
              "activityId": 32805741,
              "activityName": "Sanitaris"
            },
            {
              "activityId": 107002,
              "activityName": "Sanitat"
            },
            {
              "activityId": 110008,
              "activityName": "Servei de lísing"
            },
            {
              "activityId": 1008005,
              "activityName": "Serveis d'Assistència Tècnica"
            },
            {
              "activityId": 102908,
              "activityName": "Servicios financieros y contables"
            },
            {
              "activityId": 29810727,
              "activityName": "Teatre"
            },
            {
              "activityId": 69307190,
              "activityName": "Tratamiento y recubrimiento de metales"
            },
            {
              "activityId": 104025,
              "activityName": "Treball, industria, comerç i serveis"
            },
            {
              "activityId": 73308189,
              "activityName": "Tte. mercancias por carretera"
            },
            {
              "activityId": 13194275,
              "activityName": "Venda Cintes"
            },
            {
              "activityId": 13194273,
              "activityName": "Venda Càmera - Accessoris: Fotografia"
            },
            {
              "activityId": 13194276,
              "activityName": "Venda Pel.lícula Verge"
            },
            {
              "activityId": 29810770,
              "activityName": "Vídeo"
            }
          ]
        }
      );
    }
  }
}
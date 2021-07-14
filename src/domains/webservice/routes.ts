import controller from './controller';

export default [{
  method: 'get',
  path: '/continents',
  handlers: [
    controller.listContinents,
  ],
  },{
    method: 'get',
    path: '/continents/JSON',
    handlers: [
      controller.listContinentsJSON,
    ],
  },{
    method: 'get',
    path: '/countrys',
    handlers: [
      controller.listContrys,
    ],
  },{
    method: 'get',
    path: '/countrys/JSON',
    handlers: [
      controller.listContrysJSON,
    ],
  }];

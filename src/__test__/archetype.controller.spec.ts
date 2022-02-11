import { Test, TestingModule } from '@nestjs/testing';
import { ArchetypeController } from '../archetype/controllers/archetype.controller';
import { ArchetypeService } from '../archetype/services/archetype.service';

const mockManifest = {
  archetypeVersion: '0.0.1',
  name: 'galicia-starter-nestjs',
  version: '1.0.0',
  description: 'Galicia Starter | Arquetipo Node (NestJs)',
  author: {
    name: 'Arquitectura | Developer Experience',
    email: 'arquitectura-dx@bancogalicia.com.ar',
    url: 'https://github.bancogalicia.com.ar/ardx-crossbgba',
  },
  repository: {
    type: 'git',
    url: 'git+https://github.bancogalicia.com.ar/ardx-crossbgba/galicia-starter-nestjs.git',
  },
  homepage: 'https://github.bancogalicia.com.ar/ardx-crossbgba/galicia-starter-nestjs#readme',
  dependencies: {
    '@galicia-toolkit-nestjs/archetype': './galicia-toolkit-nestjs-archetype-0.0.1.tgz',
    '@galicia-toolkit-nestjs/filters': '0.0.2',
    '@galicia-toolkit-nestjs/health': '0.0.3',
    '@galicia-toolkit-nestjs/response-parser': '0.0.2',
    '@nestjs/class-transformer': '^0.4.0',
    '@nestjs/class-validator': '^0.13.3',
    '@nestjs/common': '^8.2.5',
    '@nestjs/config': '^1.1.6',
    '@nestjs/core': '^8.2.5',
    '@nestjs/platform-express': '^8.2.5',
    '@nestjs/swagger': '^5.1.5',
    'cross-env': '^7.0.3',
    'swagger-ui-express': '^4.3.0',
  },
  devDependencies: {
    '@galicia-toolkit-nestjs/commons': '0.0.2',
    '@nestjs/cli': '^8.2.0',
    '@nestjs/schematics': '^8.0.4',
    '@nestjs/testing': '^8.2.5',
    husky: '^4.3.8',
    jest: '^27.4.7',
  },
};

describe('ArchetypeController', () => {
  let controller: ArchetypeController;
  const archetypeService = {
    generateManifest: () => mockManifest,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArchetypeController],
      providers: [ArchetypeService],
    })
      .overrideProvider(ArchetypeService)
      .useValue(archetypeService)
      .compile();

    controller = module.get<ArchetypeController>(ArchetypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be return manifest json', async () => {
    expect(await controller.getArchetypeInfo()).toBeDefined();
    expect(await controller.getArchetypeInfo()).toEqual(mockManifest);
  });
});

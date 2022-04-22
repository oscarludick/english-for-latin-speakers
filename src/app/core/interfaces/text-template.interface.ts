export interface TextTemplate {
  app: {
    header: {
      title: string;
      'dictionaryapi.dev': string;
      'randomwordgenerator.com': string;
      recording: 'string';
    };
    actions: {
      recording: {
        start: string;
        stop: string;
      };
      refresh: {
        active: string;
        inactive: string;
      };
    };
    footer: {
      title: string;
      copy: string;
    };
  };
}

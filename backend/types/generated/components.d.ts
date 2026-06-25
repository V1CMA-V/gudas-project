import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentLink extends Struct.ComponentSchema {
  collectionName: 'components_component_links';
  info: {
    displayName: 'Link';
    icon: 'bulletList';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    variante: Schema.Attribute.Enumeration<['primario', 'secundario']> &
      Schema.Attribute.DefaultTo<'primario'>;
  };
}

export interface ComponentLogistic extends Struct.ComponentSchema {
  collectionName: 'components_component_logistics';
  info: {
    displayName: 'logistic';
    icon: 'lightbulb';
  };
  attributes: {
    capacity: Schema.Attribute.Integer;
    duration: Schema.Attribute.Integer;
    price: Schema.Attribute.Decimal;
    schedule: Schema.Attribute.String;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'apps';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Estudio de danza \u00B7 Puebla, M\u00E9xico'>;
    link: Schema.Attribute.Component<'component.link', true>;
    subHeading: Schema.Attribute.String;
    titleAccent: Schema.Attribute.String & Schema.Attribute.DefaultTo<'tu'>;
    titleLinea1: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Mueve'>;
    titleLinea2: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Mundo'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.link': ComponentLink;
      'component.logistic': ComponentLogistic;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}

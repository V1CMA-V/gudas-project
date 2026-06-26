import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentGalleryImage extends Struct.ComponentSchema {
  collectionName: 'components_component_gallery_images';
  info: {
    displayName: 'gallery-image';
    icon: 'envelop';
  };
  attributes: {
    alt: Schema.Attribute.String;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<'images'>;
    orientation: Schema.Attribute.Enumeration<
      ['horizontal', 'vertical', 'cuadrada']
    >;
  };
}

export interface ComponentHistoryHighlight extends Struct.ComponentSchema {
  collectionName: 'components_component_history_highlights';
  info: {
    displayName: 'History Highlight';
    icon: 'briefcase';
  };
  attributes: {
    body: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

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

export interface ComponentStat extends Struct.ComponentSchema {
  collectionName: 'components_component_stats';
  info: {
    displayName: 'stat';
    icon: 'eye';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<['star', 'users', 'music']>;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ComponentTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_component_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'pin';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    body: Schema.Attribute.Text;
    isActive: Schema.Attribute.Boolean;
    isFeatured: Schema.Attribute.Boolean;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
    role: Schema.Attribute.String;
  };
}

export interface LayoutGalleryHome extends Struct.ComponentSchema {
  collectionName: 'components_layout_gallery_homes';
  info: {
    displayName: 'gallery-home';
    icon: 'brush';
  };
  attributes: {
    gallery: Schema.Attribute.Component<'component.gallery-image', true>;
    tagline: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Galer\u00EDa'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Momentos que nos definen'>;
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

export interface LayoutHistorySection extends Struct.ComponentSchema {
  collectionName: 'components_layout_history_sections';
  info: {
    displayName: 'History Section';
    icon: 'hashtag';
  };
  attributes: {
    home: Schema.Attribute.Component<'component.history-highlight', true>;
    numbers: Schema.Attribute.Component<'layout.our-numbers', false>;
  };
}

export interface LayoutOurNumbers extends Struct.ComponentSchema {
  collectionName: 'components_layout_our_numbers';
  info: {
    displayName: 'Our numbers';
    icon: 'hashtag';
  };
  attributes: {
    numbers: Schema.Attribute.Component<'component.stat', true>;
  };
}

export interface LayoutTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_testimonials_sections';
  info: {
    displayName: 'Testimonials Section';
    icon: 'stack';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<'component.testimonial', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.gallery-image': ComponentGalleryImage;
      'component.history-highlight': ComponentHistoryHighlight;
      'component.link': ComponentLink;
      'component.logistic': ComponentLogistic;
      'component.stat': ComponentStat;
      'component.testimonial': ComponentTestimonial;
      'layout.gallery-home': LayoutGalleryHome;
      'layout.hero-section': LayoutHeroSection;
      'layout.history-section': LayoutHistorySection;
      'layout.our-numbers': LayoutOurNumbers;
      'layout.testimonials-section': LayoutTestimonialsSection;
    }
  }
}

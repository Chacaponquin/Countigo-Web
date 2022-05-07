import {
  faEdit,
  faNoteSticky,
  faShoppingCart,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';

export const sideBarOptions = [
  {
    id: '1',
    icon: faNoteSticky,
    label: 'Blog',
    childrenModal: [
      {
        label: 'New Article',
        route: '/blog/newArticle',
      },
      {
        label: 'Edit Article',
        route: '',
      },
    ],
  },
  {
    id: '2',
    icon: faShoppingCart,
    label: 'Services',
    childrenModal: [
      { label: 'New Service', route: '' },
      {
        label: 'Edit Service',
        route: '',
      },
    ],
  },
  {
    id: '3',
    icon: faEdit,
    label: 'Sections',
    childrenModal: [],
  },
  {
    id: '4',
    icon: faMessage,
    label: 'Messages',
    childrenModal: [],
  },
];

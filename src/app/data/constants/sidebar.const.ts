import { ISidebar } from "@data/interfaces/ui/sidebar.interface";
import { ROLE } from "@data/enums/role.enum";

export const MENU_ITEMS: ISidebar[] = [
  {
    title: "Modulos",
    children: [
      {
        title: 'Solictudes',
        icon: 'fas fa-list',
        expanded: true,
        children: [
          {
            title: 'Crear Solicitud',
            link: '/applicant/add',
            expanded: false,
            roles: [ROLE.APPLICANT, ROLE.LEADER]
          },
          {
            title: 'Listar Solicitudes',
            link: '/applicant/list',
            expanded: false,
            roles: [ROLE.APPLICANT]
          },
          {
            title: 'Listar Solicitudes',
            link: '/leader/list',
            expanded: false,
            roles: [ROLE.LEADER]
          },
          {
            title: 'Listar Solicitudes',
            link: '/technical/list',
            expanded: false,
            roles: [ROLE.TECHNICAL]
          }
        ]
      }
    ]
  }
];

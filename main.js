const questionsData = [
  {
    q: '¿Qué puerto usa Azure Files con SMB?',
    a: '445',
    options: ['445', '80', '3389'],
    why: 'SMB 3.0 en Azure Files solo se expone por el puerto TCP 445; si está bloqueado en firewall o ISP, el acceso falla.'
  },
  {
    q: '¿Qué servicio recolecta logs y métricas?',
    a: 'Log Analytics',
    options: ['Log Analytics', 'Azure Monitor Agent', 'Azure Backup'],
    why: 'Log Analytics es el workspace que centraliza registros y métricas para consultarlos con KQL dentro de Azure Monitor.'
  },
  {
    q: '¿Qué modelo de seguridad aplica permisos a recursos?',
    a: 'RBAC',
    options: ['RBAC', 'ACLs locales', 'Autenticación básica'],
    why: 'El control de acceso basado en roles (RBAC) delega permisos granularmente sobre recursos mediante roles asignados.'
  },
  {
    q: '¿Qué feature asigna IP privada a un Storage Account?',
    a: 'Private Endpoint',
    options: ['Private Endpoint', 'Service Endpoint', 'IP pública estática'],
    why: 'Private Endpoint crea una NIC en la VNet que asigna una IP privada al servicio PaaS, evitando exponer la IP pública.'
  },
  {
    q: '¿Qué servicio protege contra ataques volumétricos?',
    a: 'DDoS Protection',
    options: ['DDoS Protection', 'Azure Firewall', 'Network Security Group'],
    why: 'El plan DDoS Protection Standard mitiga ataques de red de gran volumen sobre endpoints públicos de Azure.'
  },
  {
    q: '¿Qué tipo de cuenta necesitas para snapshots de disco?',
    a: 'Premium o Standard SSD',
    options: ['Premium o Standard SSD', 'Ultra Disk', 'Almacenamiento HDD no gestionado'],
    why: 'Los snapshots de discos gestionados se respaldan en almacenamiento estándar o premium; no usan cuentas de blobs clásicas.'
  },
  {
    q: '¿Qué recurso almacena secretos cifrados?',
    a: 'Key Vault',
    options: ['Key Vault', 'Queue Storage', 'App Service Settings'],
    why: 'Azure Key Vault permite guardar secretos, llaves y certificados con cifrado HSM y control de acceso centralizado.'
  },
  {
    q: '¿Qué comando crea una VM en CLI?',
    a: 'az vm create',
    options: ['az vm create', 'az vm new', 'az vm provision'],
    why: 'El comando az vm create aprovisiona máquinas virtuales completas desde Azure CLI con imagen, tamaño y red.'
  },
  {
    q: '¿Qué tipo de identidad usa una VM para acceder a recursos?',
    a: 'Managed Identity',
    options: ['Managed Identity', 'Credenciales locales', 'Claves de cuenta de almacenamiento'],
    why: 'Una identidad administrada evita gestionar secretos, proporcionando un principal de Azure AD para la VM.'
  },
  {
    q: '¿Qué herramienta detalla conexiones entre recursos en red?',
    a: 'Network Watcher Topology',
    options: ['Network Watcher Topology', 'Traffic Analytics', 'NSG Flow Logs'],
    why: 'El diagrama de Topology en Network Watcher visualiza la relación entre VNets, subnets, NSG y NICs.'
  },
  {
    q: '¿Qué nivel de acceso es el más barato?',
    a: 'Archive',
    options: ['Archive', 'Hot', 'Cool'],
    why: 'La capa Archive del blob storage minimiza costos de almacenamiento pero requiere rehidratación para leer datos.'
  },
  {
    q: '¿Qué nivel es recomendado para datos de acceso mensual?',
    a: 'Cool',
    options: ['Cool', 'Archive', 'Premium'],
    why: 'La capa Cool equilibra costo y disponibilidad para datos con accesos esporádicos, como mensuales.'
  },
  {
    q: '¿Dónde configuras políticas de gobernanza?',
    a: 'Azure Policy',
    options: ['Azure Policy', 'RBAC', 'Blueprints'],
    why: 'Azure Policy aplica reglas de cumplimiento y auditoría sobre recursos usando definiciones y asignaciones.'
  },
  {
    q: '¿Qué algoritmo usa el balanceador de carga?',
    a: 'Hash de 5 tuplas',
    options: ['Hash de 5 tuplas', 'Round Robin', 'Least Connections'],
    why: 'Azure Load Balancer distribuye por un hash de origen/destino IP, puertos y protocolo para mantener afinidad.'
  },
  {
    q: '¿Qué recurso permite acceso RDP sin IP pública?',
    a: 'Azure Bastion',
    options: ['Azure Bastion', 'Just-In-Time', 'VPN Point-to-Site'],
    why: 'Bastion ofrece sesiones RDP/SSH sobre TLS desde el portal usando una IP pública gestionada, evitando exponer la VM.'
  },
  {
    q: '¿Qué recurso gestiona alertas automáticas?',
    a: 'Azure Monitor',
    options: ['Azure Monitor', 'Azure Advisor', 'Activity Log'],
    why: 'Azure Monitor crea reglas de alerta basadas en métricas, logs o actividad y envía notificaciones o acciones.'
  },
  {
    q: '¿Qué contenedor guarda discos gestionados?',
    a: 'Managed Disk',
    options: ['Managed Disk', 'Storage Account clásico', 'VM Extension'],
    why: 'Los discos gestionados son recursos propios que abstraen la cuenta de almacenamiento y se asignan a VMs.'
  },
  {
    q: '¿Qué se necesita para emparejar VNets?',
    a: 'Espacios de direcciones no solapados',
    options: ['Espacios de direcciones no solapados', 'Región compartida', 'Gateways con SKU Básico'],
    why: 'El peering exige prefijos únicos; si las redes se solapan, el enrutamiento no puede resolverse.'
  },
  {
    q: '¿Qué se usa para mapear un FQDN interno?',
    a: 'Private DNS Zone',
    options: ['Private DNS Zone', 'Public DNS Zone', 'Archivo hosts'],
    why: 'Las Private DNS Zones resuelven nombres internos sobre VNets enlazadas, evitando dependencias de DNS públicos.'
  },
  {
    q: '¿Qué herramienta analiza rendimiento avanzado?',
    a: 'VM Insights',
    options: ['VM Insights', 'PerfMon local', 'Traffic Manager'],
    why: 'VM Insights habilita mapas de dependencias y métricas detalladas de performance a través de Azure Monitor Agent.'
  },
  {
    q: '¿Qué distribuye tráfico entre VMs?',
    a: 'Azure Load Balancer',
    options: ['Azure Load Balancer', 'Application Gateway', 'Traffic Manager'],
    why: 'El Load Balancer L4 reparte conexiones entrantes o salientes entre instancias del backend pool.'
  },
  {
    q: '¿Qué servicio escala VMs automáticamente?',
    a: 'VM Scale Set',
    options: ['VM Scale Set', 'Availability Set', 'App Service Plan'],
    why: 'Un VM Scale Set ajusta el número de instancias con reglas de autoscale y plantillas consistentes.'
  },
  {
    q: '¿Qué formato usan las plantillas ARM?',
    a: 'JSON',
    options: ['JSON', 'YAML', 'Bicep'],
    why: 'Las ARM Templates describen infraestructura declarativa en JSON, incluyendo parámetros y dependencias.'
  },
  {
    q: '¿Dónde se almacenan snapshots?',
    a: 'En el mismo Storage interno',
    options: ['En el mismo Storage interno', 'En un NAS on-premises', 'En una cuenta de blobs externa'],
    why: 'Los snapshots de discos gestionados viven como recursos de almacenamiento interno en la suscripción y región del disco.'
  },
  {
    q: '¿Qué retiene diagnósticos de VMs?',
    a: 'Azure Monitor Agent (AMA)',
    options: ['Azure Monitor Agent (AMA)', 'Diagnóstico Invitado clásico', 'Azure DevOps Agent'],
    why: 'AMA recopila métricas y logs de invitado para enviarlos a Log Analytics o cuentas de almacenamiento.'
  },
  {
    q: '¿Qué protocolo usan los backups?',
    a: 'HTTPS',
    options: ['HTTPS', 'SMB', 'FTP'],
    why: 'Azure Backup transmite y cifra los datos en tránsito usando HTTPS para asegurar la copia.'
  },
  {
    q: '¿Dónde configuras bloqueos de recursos?',
    a: 'Resource Lock',
    options: ['Resource Lock', 'NSG', 'Policy Initiative'],
    why: 'Los Resource Locks (ReadOnly/Delete) se aplican a nivel de recurso o grupo para impedir modificaciones o borrado.'
  },
  {
    q: '¿Qué herramienta captura tráfico?',
    a: 'Network Watcher Packet Capture',
    options: ['Network Watcher Packet Capture', 'Wireshark local', 'Azure Firewall logs'],
    why: 'Packet Capture permite registrar paquetes en una NIC de VM para analizar flujos o diagnósticos de red.'
  },
  {
    q: '¿Qué configuración permite acceso HTTPS global?',
    a: 'Azure Front Door',
    options: ['Azure Front Door', 'Traffic Manager', 'ExpressRoute'],
    why: 'Front Door ofrece distribución global HTTP/HTTPS con CDN, WAF opcional y aceleración Anycast.'
  },
  {
    q: '¿Qué tipo de IP requiere un LB público?',
    a: 'IP pública estática',
    options: ['IP pública estática', 'IP dinámica privada', 'IP reservada interna'],
    why: 'El frontend público de un Load Balancer necesita una IP pública estática para registros DNS y estabilidad.'
  },
  {
    q: '¿Qué atributo define una subnet delegada?',
    a: 'Delegation',
    options: ['Delegation', 'Service Tag', 'Route Table'],
    why: 'La propiedad delegation asigna la subnet a un servicio PaaS específico, habilitando permisos y rutas necesarias.'
  },
  {
    q: '¿Qué tabla centraliza todas las métricas?',
    a: 'AzureMetrics',
    options: ['AzureMetrics', 'AzureActivity', 'InsightsMetrics'],
    why: 'En Log Analytics, AzureMetrics almacena métricas de plataforma expuestas por Azure Monitor.'
  },
  {
    q: '¿Qué comando lista VMs en CLI?',
    a: 'az vm list',
    options: ['az vm list', 'az vm show-all', 'az vm enumerate'],
    why: 'az vm list devuelve las máquinas virtuales de la suscripción o grupo de recursos indicado en Azure CLI.'
  },
  {
    q: '¿Qué nivel de DDoS es automático?',
    a: 'Basic',
    options: ['Basic', 'Standard', 'Ninguno'],
    why: 'La protección DDoS Basic está incluida por defecto en Azure y cubre la infraestructura de plataforma.'
  },
  {
    q: '¿Qué se usa para crear máquinas idénticas?',
    a: 'Imagen (Image)',
    options: ['Imagen (Image)', 'Snapshot', 'Custom Script Extension'],
    why: 'Las imágenes personalizadas capturan el estado de una VM para desplegar instancias idénticas posteriormente.'
  },
  {
    q: '¿Qué tipo de discos soporta Ultra Disk?',
    a: 'Premium (Ultra SSD)',
    options: ['Premium (Ultra SSD)', 'Standard HDD', 'Ephemeral SSD'],
    why: 'Ultra Disk es una oferta de discos gestionados en la familia Premium que permite IOPS y latencia muy bajas.'
  },
  {
    q: '¿Qué herramienta permite mover recursos?',
    a: 'Azure Resource Mover',
    options: ['Azure Resource Mover', 'Azure Site Recovery', 'AzCopy'],
    why: 'Resource Mover orquesta migraciones entre regiones de recursos como VMs, NICs o grupos de recursos.'
  },
  {
    q: '¿Qué recurso almacena logs de actividad?',
    a: 'Activity Log',
    options: ['Activity Log', 'Log Analytics workspace', 'Storage Account'],
    why: 'El Activity Log registra operaciones de control plane en la suscripción, independiente de los logs de recursos.'
  },
  {
    q: '¿Qué tipo de migración usa ASR?',
    a: 'Replicación continua',
    options: ['Replicación continua', 'Backup diario', 'Export/Import'],
    why: 'Azure Site Recovery replica continuamente las máquinas protegidas para minimizar el RPO en un failover.'
  },
  {
    q: '¿Qué plantilla define dependencias?',
    a: 'ARM Template (dependsOn)',
    options: ['ARM Template (dependsOn)', 'Terraform module', 'Runbook de Automation'],
    why: 'La propiedad dependsOn en una ARM Template asegura que un recurso se implemente tras completarse sus prerequisitos.'
  },
  {
    q: '¿Qué permite acceder a un KV sin claves?',
    a: 'Managed Identity',
    options: ['Managed Identity', 'Access Keys', 'Connection Strings'],
    why: 'Una identidad administrada puede obtener tokens de Azure AD y autenticarse en Key Vault sin credenciales secretas.'
  },
  {
    q: '¿Qué permite controlar tráfico saliente de una VM?',
    a: 'NSG outbound rules',
    options: ['NSG outbound rules', 'UDR inbound', 'Application Gateway'],
    why: 'Las reglas de salida de un Network Security Group definen puertos y destinos permitidos o denegados desde la VM.'
  },
  {
    q: '¿Qué componente necesita un LB?',
    a: 'Backend Pool',
    options: ['Backend Pool', 'Application Rule', 'VPN Gateway'],
    why: 'El backend pool agrupa las instancias que recibirán el tráfico balanceado del frontend del Load Balancer.'
  },
  {
    q: '¿Qué servicio permite FTP/FTPS?',
    a: 'App Service',
    options: ['App Service', 'Static Web Apps', 'Azure Files NFS'],
    why: 'Las apps en App Service exponen endpoints FTP/FTPS para desplegar contenido o revisar archivos de sitio.'
  },
  {
    q: '¿Qué configuraciones evitan borrado accidental?',
    a: 'Resource Locks',
    options: ['Resource Locks', 'Soft delete de blobs', 'Activity Log'],
    why: 'Los locks Delete y ReadOnly previenen eliminaciones o cambios no intencionados en recursos críticos.'
  },
  {
    q: '¿Qué asegura redes con reglas centralizadas?',
    a: 'Azure Firewall',
    options: ['Azure Firewall', 'NSG en cada subnet', 'VPN Gateway'],
    why: 'Azure Firewall es un firewall stateful administrado con reglas de red y aplicación centralizadas.'
  },
  {
    q: '¿Qué genera recomendaciones automáticas?',
    a: 'Azure Advisor',
    options: ['Azure Advisor', 'Azure DevOps Boards', 'Cost Management export'],
    why: 'Advisor analiza configuraciones y consumo para proponer mejoras de costo, seguridad, confiabilidad y rendimiento.'
  },
  {
    q: '¿Qué servicio permite pipeline CI/CD?',
    a: 'Azure DevOps',
    options: ['Azure DevOps', 'GitHub Wiki', 'Azure Automation'],
    why: 'Azure DevOps Pipelines ofrece CI/CD para construir y desplegar aplicaciones hacia Azure y otros destinos.'
  },
  {
    q: '¿Qué acceso da lectura a todo Azure?',
    a: 'Reader',
    options: ['Reader', 'Owner', 'User Access Administrator'],
    why: 'El rol Reader concede permisos de lectura a todos los recursos sin capacidad de modificación.'
  },
  {
    q: '¿Qué acceso crea y gestiona recursos?',
    a: 'Contributor',
    options: ['Contributor', 'Reader', 'Monitoring Reader'],
    why: 'Contributor otorga privilegios de creación y actualización de recursos, pero no asigna roles a otros usuarios.'
  }
,
  {
    q: "\u00bfQu\u00e9 caracter\u00edstica permite cifrar discos autom\u00e1ticamente?",
    a: "Encryption at Rest",
    options: ["Encryption at Rest", "Traffic Manager", "Application Gateway"],
    why: "Encryption at Rest es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 clave se usa para cifrar VMs con Azure Disk Encryption?",
    a: "Key Vault Key",
    options: ["Key Vault Key", "ExpressRoute", "Service Endpoint"],
    why: "Key Vault Key es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 IP se asigna a una VM al apagarla (deallocation)?",
    a: "Se libera la IP din\u00e1mica",
    options: ["Se libera la IP din\u00e1mica", "Azure Firewall", "Azure Policy"],
    why: "Se libera la IP din\u00e1mica es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 protocolo usa Azure Load Balancer?",
    a: "TCP/UDP",
    options: ["TCP/UDP", "Application Gateway", "Azure Advisor"],
    why: "TCP/UDP es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 SKU de load balancer soporta HA Ports?",
    a: "Standard",
    options: ["Standard", "Service Endpoint", "Azure Kubernetes Service"],
    why: "Standard es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de servicio usa App Service para HTTPS gratis?",
    a: "Certificado administrado",
    options: ["Certificado administrado", "Azure Policy", "Storage Account"],
    why: "Certificado administrado es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando elimina una VM en CLI?",
    a: "az vm delete",
    options: ["az vm delete", "Azure Advisor", "SQL Database"],
    why: "az vm delete es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio integra alertas, m\u00e9tricas y logs?",
    a: "Azure Monitor",
    options: ["Azure Monitor", "Azure Kubernetes Service", "App Service"],
    why: "Azure Monitor es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tabla guarda logs del agente de VM?",
    a: "Heartbeat",
    options: ["Heartbeat", "Storage Account", "Virtual Network"],
    why: "Heartbeat es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio analiza configuraciones de seguridad?",
    a: "Defender for Cloud",
    options: ["Defender for Cloud", "SQL Database", "VPN Gateway"],
    why: "Defender for Cloud es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 permite aislar redes internas con inspecci\u00f3n avanzada?",
    a: "Azure Firewall",
    options: ["Azure Firewall", "Virtual Network", "Azure Front Door"],
    why: "Azure Firewall es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de storage soporta ZRS?",
    a: "StorageV2",
    options: ["StorageV2", "Virtual Network", "Azure Front Door"],
    why: "StorageV2 es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 se usa para configurar reglas a nivel de NIC?",
    a: "NSG",
    options: ["NSG", "VPN Gateway", "Key Vault"],
    why: "NSG es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 formato usa CloudShell para scripts?",
    a: "PowerShell/Bash",
    options: ["PowerShell/Bash", "Private Endpoint", "Key Vault"],
    why: "PowerShell/Bash es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 se usa para replicar una VM entre regiones?",
    a: "Azure Site Recovery",
    options: ["Azure Site Recovery", "Azure Front Door", "Load Balancer"],
    why: "Azure Site Recovery es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 nivel de acceso permite lecturas frecuentes?",
    a: "Hot",
    options: ["Hot", "NSG", "Azure DevOps"],
    why: "Hot es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 nivel es ideal para datos fr\u00edos no cr\u00edticos?",
    a: "Cool",
    options: ["Cool", "Key Vault", "Azure Functions"],
    why: "Cool es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 nivel es para archivado a largo plazo?",
    a: "Archive",
    options: ["Archive", "Load Balancer", "Traffic Manager"],
    why: "Archive es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 recurso guarda configuraciones predefinidas?",
    a: "Blueprint",
    options: ["Blueprint", "Azure DevOps", "ExpressRoute"],
    why: "Blueprint es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 base de datos usa Log Analytics?",
    a: "Kusto (KQL)",
    options: ["Kusto (KQL)", "Azure Functions", "Azure Firewall"],
    why: "Kusto (KQL) es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 m\u00e9todo protege contra borrado de blobs?",
    a: "Soft Delete",
    options: ["Soft Delete", "Traffic Manager", "Application Gateway"],
    why: "Soft Delete es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 m\u00e9todo protege archivos contra modificaciones?",
    a: "Versioning",
    options: ["Versioning", "ExpressRoute", "Service Endpoint"],
    why: "Versioning es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 protocolo usa Azure AD para autenticaci\u00f3n?",
    a: "OAuth2 / OpenID Connect",
    options: ["OAuth2 / OpenID Connect", "Azure Firewall", "Azure Policy"],
    why: "OAuth2 / OpenID Connect es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 permite acceso RDP sin exponer IP?",
    a: "Azure Bastion",
    options: ["Azure Bastion", "Application Gateway", "Azure Advisor"],
    why: "Azure Bastion es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 componente analiza rendimiento de red?",
    a: "Connection Monitor",
    options: ["Connection Monitor", "Service Endpoint", "Azure Kubernetes Service"],
    why: "Connection Monitor es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 se usa para enrutar tr\u00e1fico espec\u00edfico?",
    a: "User Defined Routes (UDR)",
    options: ["User Defined Routes (UDR)", "Azure Policy", "Storage Account"],
    why: "User Defined Routes (UDR) es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 registro muestra eventos administrativos?",
    a: "Activity Log",
    options: ["Activity Log", "Azure Advisor", "SQL Database"],
    why: "Activity Log es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 herramienta registra cambios de recursos?",
    a: "Change Analysis",
    options: ["Change Analysis", "Azure Kubernetes Service", "App Service"],
    why: "Change Analysis es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando lista los discos en CLI?",
    a: "az disk list",
    options: ["az disk list", "Storage Account", "Virtual Network"],
    why: "az disk list es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando lista las IP p\u00fablicas?",
    a: "az public-ip list",
    options: ["az public-ip list", "SQL Database", "VPN Gateway"],
    why: "az public-ip list es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 identificador es \u00fanico en Azure?",
    a: "Resource ID",
    options: ["Resource ID", "App Service", "Private Endpoint"],
    why: "Resource ID es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando lista grupos de recursos?",
    a: "az group list",
    options: ["az group list", "Virtual Network", "Azure Front Door"],
    why: "az group list es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 se usa para aplicar reglas basadas en subred?",
    a: "NSG",
    options: ["NSG", "Private Endpoint", "Load Balancer"],
    why: "NSG es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 se usa para aplicar reglas L7?",
    a: "Application Gateway",
    options: ["Application Gateway", "NSG", "Azure DevOps"],
    why: "Application Gateway es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 protocolo usa Application Gateway?",
    a: "HTTP/HTTPS",
    options: ["HTTP/HTTPS", "Azure Front Door", "Load Balancer"],
    why: "HTTP/HTTPS es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 balanceador soporta WAF?",
    a: "Application Gateway",
    options: ["Application Gateway", "Load Balancer", "Traffic Manager"],
    why: "Application Gateway es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio permite publicar apps internas?",
    a: "Azure AD Application Proxy",
    options: ["Azure AD Application Proxy", "Key Vault", "Azure Functions"],
    why: "Azure AD Application Proxy es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 se usa para crear funciones sin servidor?",
    a: "Azure Functions",
    options: ["Azure Functions", "Azure DevOps", "Azure Firewall"],
    why: "Azure Functions es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 permite automatizar tareas con scripts?",
    a: "Azure Automation Runbook",
    options: ["Azure Automation Runbook", "Azure DevOps", "ExpressRoute"],
    why: "Azure Automation Runbook es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 motor de consultas usa Monitor?",
    a: "Kusto Query Language (KQL)",
    options: ["Kusto Query Language (KQL)", "Azure Functions", "Azure Firewall"],
    why: "Kusto Query Language (KQL) es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 cuenta para usar Private Endpoint?",
    a: "Storage V2 o compatible",
    options: ["Storage V2 o compatible", "Traffic Manager", "Application Gateway"],
    why: "Storage V2 o compatible es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tabla almacena logs de NSG?",
    a: "AzureDiagnostics",
    options: ["AzureDiagnostics", "ExpressRoute", "Service Endpoint"],
    why: "AzureDiagnostics es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 recurso muestra inventario de VM?",
    a: "Azure Resource Graph",
    options: ["Azure Resource Graph", "Azure Firewall", "Azure Policy"],
    why: "Azure Resource Graph es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio controla el acceso basado en identidad?",
    a: "Azure AD",
    options: ["Azure AD", "Application Gateway", "Azure Advisor"],
    why: "Azure AD es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de disco da mayor IOPS?",
    a: "Ultra SSD",
    options: ["Ultra SSD", "Service Endpoint", "Azure Kubernetes Service"],
    why: "Ultra SSD es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de VM usa GPUs?",
    a: "Series NV/NC",
    options: ["Series NV/NC", "Azure Policy", "Storage Account"],
    why: "Series NV/NC es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando reinicia una VM?",
    a: "az vm restart",
    options: ["az vm restart", "Azure Advisor", "SQL Database"],
    why: "az vm restart es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio controla escalado autom\u00e1tico web?",
    a: "App Service Plan",
    options: ["App Service Plan", "Azure Kubernetes Service", "App Service"],
    why: "App Service Plan es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 componente almacena configuraciones de ARM?",
    a: "Resource Manager",
    options: ["Resource Manager", "Storage Account", "Virtual Network"],
    why: "Resource Manager es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 registro se usa para ver creaciones, borrados y cambios de recursos?",
    a: "Activity Log",
    options: ["Activity Log", "SQL Database", "VPN Gateway"],
    why: "Activity Log es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio gestiona identidades en Azure?",
    a: "Azure AD",
    options: ["Azure AD", "App Service", "Private Endpoint"],
    why: "Azure AD es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando crea un grupo de recursos?",
    a: "az group create",
    options: ["az group create", "Virtual Network", "Azure Front Door"],
    why: "az group create es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de IP conserva la IP al reiniciar una VM?",
    a: "IP p\u00fablica est\u00e1tica",
    options: ["IP p\u00fablica est\u00e1tica", "VPN Gateway", "NSG"],
    why: "IP p\u00fablica est\u00e1tica es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio genera recomendaciones de optimizaci\u00f3n?",
    a: "Azure Advisor",
    options: ["Azure Advisor", "Key Vault", "Azure Functions"],
    why: "Azure Advisor es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 herramienta identifica puertos abiertos?",
    a: "NSG Flow Logs",
    options: ["NSG Flow Logs", "Azure Front Door", "Load Balancer"],
    why: "NSG Flow Logs es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando elimina un RG?",
    a: "az group delete",
    options: ["az group delete", "NSG", "Azure DevOps"],
    why: "az group delete es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tabla guarda errores de agente?",
    a: "Perf",
    options: ["Perf", "Key Vault", "Azure Functions"],
    why: "Perf es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio supervisa el estado de VMs?",
    a: "VM Insights",
    options: ["VM Insights", "Load Balancer", "Traffic Manager"],
    why: "VM Insights es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 capa protege contra ataques DDoS?",
    a: "DDoS Protection Standard",
    options: ["DDoS Protection Standard", "Azure DevOps", "ExpressRoute"],
    why: "DDoS Protection Standard es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 recurso se usa para RBAC?",
    a: "Azure AD Roles + Roles ARM",
    options: ["Azure AD Roles + Roles ARM", "Azure Functions", "Azure Firewall"],
    why: "Azure AD Roles + Roles ARM es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando muestra el tama\u00f1o de una VM?",
    a: "az vm show",
    options: ["az vm show", "Traffic Manager", "Application Gateway"],
    why: "az vm show es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 recurso contiene protocolos SMB/NFS?",
    a: "Storage Account",
    options: ["Storage Account", "Service Endpoint", "Azure Kubernetes Service"],
    why: "Storage Account es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 se usa para automatizar despliegues ARM?",
    a: "Azure DevOps Pipeline",
    options: ["Azure DevOps Pipeline", "Azure Firewall", "Azure Policy"],
    why: "Azure DevOps Pipeline es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 nivel de redundancia ofrece mayor disponibilidad regional?",
    a: "GZRS",
    options: ["GZRS", "Application Gateway", "Azure Advisor"],
    why: "GZRS es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 backup soporta restauraci\u00f3n a nivel de archivo?",
    a: "Azure Backup (VM File Recovery)",
    options: ["Azure Backup (VM File Recovery)", "Service Endpoint", "Azure Kubernetes Service"],
    why: "Azure Backup (VM File Recovery) es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 se usa para bloquear cambios en un recurso?",
    a: "Resource Lock",
    options: ["Resource Lock", "Azure Policy", "Storage Account"],
    why: "Resource Lock es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 se usa para exponer un contenedor web?",
    a: "App Service",
    options: ["App Service", "SQL Database", "Private Endpoint"],
    why: "App Service es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 protocolo usa Key Vault?",
    a: "HTTPS",
    options: ["HTTPS", "Azure Kubernetes Service", "App Service"],
    why: "HTTPS es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando permite listar NICs?",
    a: "az network nic list",
    options: ["az network nic list", "Storage Account", "Virtual Network"],
    why: "az network nic list es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio permite resolver nombres internos?",
    a: "Private DNS Zone",
    options: ["Private DNS Zone", "SQL Database", "VPN Gateway"],
    why: "Private DNS Zone es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio permite replicar BLOBs entre cuentas?",
    a: "Object Replication",
    options: ["Object Replication", "App Service", "Private Endpoint"],
    why: "Object Replication es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 nivel de seguridad cifra datos en tr\u00e1nsito?",
    a: "TLS",
    options: ["TLS", "Virtual Network", "Azure Front Door"],
    why: "TLS es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 componente administra grupos de afinidad?",
    a: "No existen, fueron retirados",
    options: ["No existen, fueron retirados", "VPN Gateway", "NSG"],
    why: "No existen, fueron retirados es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 protocolo usa SSH?",
    a: "22",
    options: ["22", "Private Endpoint", "Key Vault"],
    why: "22 es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 herramienta permite acceso remoto sin RDP?",
    a: "Azure Bastion",
    options: ["Azure Bastion", "Azure Front Door", "Load Balancer"],
    why: "Azure Bastion es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando crea una subnet?",
    a: "az network vnet subnet create",
    options: ["az network vnet subnet create", "NSG", "Azure DevOps"],
    why: "az network vnet subnet create es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 se usa para limitar acceso a Storage por IP?",
    a: "Firewall del Storage Account",
    options: ["Firewall del Storage Account", "Key Vault", "Azure Functions"],
    why: "Firewall del Storage Account es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 recurso permite autoescalar con m\u00e9tricas?",
    a: "VM Scale Set",
    options: ["VM Scale Set", "Load Balancer", "Traffic Manager"],
    why: "VM Scale Set es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio gestiona secretos para apps?",
    a: "Key Vault",
    options: ["Key Vault", "Azure Firewall", "Azure Policy"],
    why: "Key Vault es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando lista discos de VM?",
    a: "az vm show --query storageProfile",
    options: ["az vm show --query storageProfile", "Azure Functions", "Azure Firewall"],
    why: "az vm show --query storageProfile es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de seguridad bloquea borrado accidental?",
    a: "Soft Delete",
    options: ["Soft Delete", "Traffic Manager", "Application Gateway"],
    why: "Soft Delete es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de suscripci\u00f3n genera costos sin recursos?",
    a: "Todas (pago por uso)",
    options: ["Todas (pago por uso)", "ExpressRoute", "Service Endpoint"],
    why: "Todas (pago por uso) es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio permite certificados administrados?",
    a: "App Service",
    options: ["App Service", "Azure Advisor", "SQL Database"],
    why: "App Service es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de tr\u00e1fico controla un NSG?",
    a: "Capa 4 (TCP/UDP)",
    options: ["Capa 4 (TCP/UDP)", "Application Gateway", "Azure Advisor"],
    why: "Capa 4 (TCP/UDP) es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 componente protege apps web?",
    a: "WAF",
    options: ["WAF", "Service Endpoint", "Azure Kubernetes Service"],
    why: "WAF es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio permite migraci\u00f3n sin downtime?",
    a: "Azure Site Recovery",
    options: ["Azure Site Recovery", "Azure Policy", "Storage Account"],
    why: "Azure Site Recovery es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 m\u00e9todo da acceso temporal seguro a Storage?",
    a: "SAS Token",
    options: ["SAS Token", "Azure Advisor", "SQL Database"],
    why: "SAS Token es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 modelo de administraci\u00f3n usa ARM?",
    a: "Declarativo",
    options: ["Declarativo", "Azure Kubernetes Service", "App Service"],
    why: "Declarativo es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de VM tiene alta memoria?",
    a: "Series M",
    options: ["Series M", "Storage Account", "Virtual Network"],
    why: "Series M es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando lista im\u00e1genes disponibles?",
    a: "az vm image list",
    options: ["az vm image list", "SQL Database", "VPN Gateway"],
    why: "az vm image list es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 evento muestra operaciones de usuario?",
    a: "Activity Log",
    options: ["Activity Log", "App Service", "Private Endpoint"],
    why: "Activity Log es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio aplica reglas a nivel de aplicaci\u00f3n?",
    a: "App Gateway",
    options: ["App Gateway", "Virtual Network", "Azure Front Door"],
    why: "App Gateway es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tabla registra rendimiento del sistema?",
    a: "Perf",
    options: ["Perf", "VPN Gateway", "NSG"],
    why: "Perf es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio se usa para identity federation?",
    a: "Azure AD",
    options: ["Azure AD", "Private Endpoint", "Key Vault"],
    why: "Azure AD es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de clave cifra discos gestionados?",
    a: "Platform-managed keys",
    options: ["Platform-managed keys", "Azure Front Door", "Load Balancer"],
    why: "Platform-managed keys es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando lista IPs privadas?",
    a: "az vm list-ip-addresses",
    options: ["az vm list-ip-addresses", "NSG", "Azure DevOps"],
    why: "az vm list-ip-addresses es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 permite la recuperaci\u00f3n instant\u00e1nea de VMs?",
    a: "Recovery Services Vault",
    options: ["Recovery Services Vault", "Key Vault", "Azure Functions"],
    why: "Recovery Services Vault es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio controla inventarios?",
    a: "Azure Automation Inventory",
    options: ["Azure Automation Inventory", "Load Balancer", "Traffic Manager"],
    why: "Azure Automation Inventory es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 recurso centraliza m\u00e9tricas?",
    a: "Azure Monitor Metrics",
    options: ["Azure Monitor Metrics", "Azure DevOps", "ExpressRoute"],
    why: "Azure Monitor Metrics es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 herramienta revisa dependencias en ARM?",
    a: "Resource Graph Explorer",
    options: ["Resource Graph Explorer", "Azure Functions", "Azure Firewall"],
    why: "Resource Graph Explorer es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio administra el acceso condicional?",
    a: "Azure AD",
    options: ["Azure AD", "Traffic Manager", "Application Gateway"],
    why: "Azure AD es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando crea una VNet?",
    a: "az network vnet create",
    options: ["az network vnet create", "ExpressRoute", "Service Endpoint"],
    why: "az network vnet create es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 SKU de Load Balancer soporta zonas de disponibilidad?",
    a: "Standard",
    options: ["Standard", "Azure Firewall", "Azure Policy"],
    why: "Standard es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio distribuye tr\u00e1fico a nivel global?",
    a: "Azure Front Door",
    options: ["Azure Front Door", "Storage Account", "Virtual Network"],
    why: "Azure Front Door es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 base de datos usa Application Insights?",
    a: "Log Analytics (Kusto)",
    options: ["Log Analytics (Kusto)", "Service Endpoint", "Azure Kubernetes Service"],
    why: "Log Analytics (Kusto) es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 nivel de replicaci\u00f3n tiene m\u00e1s coste?",
    a: "GZRS",
    options: ["GZRS", "Azure Policy", "Storage Account"],
    why: "GZRS es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 recurso genera una alert rule?",
    a: "Azure Monitor",
    options: ["Azure Monitor", "Azure Advisor", "SQL Database"],
    why: "Azure Monitor es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando reinicia un Load Balancer?",
    a: "No existe; LB es totalmente gestionado",
    options: ["No existe; LB es totalmente gestionado", "Azure Kubernetes Service", "App Service"],
    why: "No existe; LB es totalmente gestionado es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de clave permite cifrar discos con BYOK?",
    a: "Customer-managed key (CMK)",
    options: ["Customer-managed key (CMK)", "Storage Account", "Virtual Network"],
    why: "Customer-managed key (CMK) es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 recurso permite acceso privado a SQL?",
    a: "Private Endpoint",
    options: ["Private Endpoint", "NSG", "Azure DevOps"],
    why: "Private Endpoint es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio analiza latencia entre regiones?",
    a: "Network Watcher Connection Monitor",
    options: ["Network Watcher Connection Monitor", "App Service", "Private Endpoint"],
    why: "Network Watcher Connection Monitor es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 actividad borra definitivamente un blob?",
    a: "Delete + esperar retenci\u00f3n sin Soft Delete",
    options: ["Delete + esperar retenci\u00f3n sin Soft Delete", "Virtual Network", "Azure Front Door"],
    why: "Delete + esperar retenci\u00f3n sin Soft Delete es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 se necesita para iniciar sesi\u00f3n en CloudShell?",
    a: "Cuenta de Azure + Storage asignado",
    options: ["Cuenta de Azure + Storage asignado", "VPN Gateway", "NSG"],
    why: "Cuenta de Azure + Storage asignado es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 motor usa Azure Resource Graph?",
    a: "Kusto",
    options: ["Kusto", "Private Endpoint", "Key Vault"],
    why: "Kusto es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando crea un NSG?",
    a: "az network nsg create",
    options: ["az network nsg create", "Azure Front Door", "Load Balancer"],
    why: "az network nsg create es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 recurso aplica reglas L4?",
    a: "NSG",
    options: ["NSG", "ExpressRoute", "Service Endpoint"],
    why: "NSG es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 recurso aplica reglas L7?",
    a: "Application Gateway WAF",
    options: ["Application Gateway WAF", "Key Vault", "Azure Functions"],
    why: "Application Gateway WAF es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando lista subnets?",
    a: "az network vnet subnet list",
    options: ["az network vnet subnet list", "Load Balancer", "Traffic Manager"],
    why: "az network vnet subnet list es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 habilita protecci\u00f3n contra ransomware en Storage?",
    a: "Versioning + Immutable Policy",
    options: ["Versioning + Immutable Policy", "Azure DevOps", "ExpressRoute"],
    why: "Versioning + Immutable Policy es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tabla almacena diagn\u00f3sticos de App Service?",
    a: "AppServiceHTTPLogs",
    options: ["AppServiceHTTPLogs", "Azure Functions", "Azure Firewall"],
    why: "AppServiceHTTPLogs es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio guarda copias de seguridad de VMs?",
    a: "Backup Vault",
    options: ["Backup Vault", "Traffic Manager", "Application Gateway"],
    why: "Backup Vault es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio usa escalado autom\u00e1tico de sitios web?",
    a: "App Service Plan",
    options: ["App Service Plan", "ExpressRoute", "Service Endpoint"],
    why: "App Service Plan es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 elemento define roles personalizados?",
    a: "Custom Role (JSON)",
    options: ["Custom Role (JSON)", "Azure Firewall", "Azure Policy"],
    why: "Custom Role (JSON) es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 protocolo usa Azure SQL?",
    a: "TDS sobre 1433",
    options: ["TDS sobre 1433", "Application Gateway", "Azure Advisor"],
    why: "TDS sobre 1433 es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio crea alertas de m\u00e9tricas?",
    a: "Azure Monitor Metrics",
    options: ["Azure Monitor Metrics", "Service Endpoint", "Azure Kubernetes Service"],
    why: "Azure Monitor Metrics es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de cuenta permite acceso NFS?",
    a: "StorageV2 con NFS habilitado",
    options: ["StorageV2 con NFS habilitado", "Azure Policy", "Storage Account"],
    why: "StorageV2 con NFS habilitado es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando asigna una IP p\u00fablica a una VM?",
    a: "az vm ip attach/detach",
    options: ["az vm ip attach/detach", "Azure Advisor", "SQL Database"],
    why: "az vm ip attach/detach es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 SKU de IP admite zonas de disponibilidad?",
    a: "Standard Public IP",
    options: ["Standard Public IP", "Azure Kubernetes Service", "App Service"],
    why: "Standard Public IP es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 recurso permite analizar errores recurrentes?",
    a: "Application Insights",
    options: ["Application Insights", "Storage Account", "Virtual Network"],
    why: "Application Insights es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio usa pol\u00edticas de acceso secret + key + cert?",
    a: "Key Vault",
    options: ["Key Vault", "NSG", "Azure Functions"],
    why: "Key Vault es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 bloquea el tr\u00e1fico entrante por defecto?",
    a: "NSG inbound default deny",
    options: ["NSG inbound default deny", "App Service", "Private Endpoint"],
    why: "NSG inbound default deny es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio crea pipelines CI/CD?",
    a: "Azure DevOps",
    options: ["Azure DevOps", "Load Balancer", "ExpressRoute"],
    why: "Azure DevOps es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 herramienta permite automatizar scripts PowerShell?",
    a: "Azure Automation",
    options: ["Azure Automation", "VPN Gateway", "NSG"],
    why: "Azure Automation es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 motor usa Defender for Cloud para an\u00e1lisis?",
    a: "Kusto",
    options: ["Kusto", "Private Endpoint", "Key Vault"],
    why: "Kusto es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 almacenamiento permite acceso SFTP nativo?",
    a: "StorageV2 (con SFTP habilitado)",
    options: ["StorageV2 (con SFTP habilitado)", "Azure Front Door", "Load Balancer"],
    why: "StorageV2 (con SFTP habilitado) es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando exporta una plantilla ARM de un recurso?",
    a: "az group export",
    options: ["az group export", "NSG", "Azure DevOps"],
    why: "az group export es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio registra eventos del sistema de VM?",
    a: "Guest OS Logs (AMA)",
    options: ["Guest OS Logs (AMA)", "Key Vault", "Azure Functions"],
    why: "Guest OS Logs (AMA) es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 configuraci\u00f3n guarda cambios de configuraci\u00f3n?",
    a: "Change Tracking",
    options: ["Change Tracking", "Load Balancer", "Traffic Manager"],
    why: "Change Tracking es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tecnolog\u00eda permite mover una IP entre VMs?",
    a: "Azure Load Balancer",
    options: ["Azure Load Balancer", "Azure DevOps", "ExpressRoute"],
    why: "Azure Load Balancer es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 formato soportan las pol\u00edticas de Azure?",
    a: "JSON",
    options: ["JSON", "Azure Functions", "Azure Firewall"],
    why: "JSON es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 nivel de redundancia duplica datos entre zonas de la misma regi\u00f3n?",
    a: "ZRS",
    options: ["ZRS", "Traffic Manager", "Application Gateway"],
    why: "ZRS es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 caracter\u00edstica obliga a usar HTTPS?",
    a: "Secure transfer required",
    options: ["Secure transfer required", "ExpressRoute", "Service Endpoint"],
    why: "Secure transfer required es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 log captura operaciones administrativas de RBAC?",
    a: "Activity Log",
    options: ["Activity Log", "Azure Firewall", "Azure Policy"],
    why: "Activity Log es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 recurso permite conectarse a una VM sin cliente RDP?",
    a: "Azure Bastion",
    options: ["Azure Bastion", "Application Gateway", "Azure Advisor"],
    why: "Azure Bastion es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio usa la tabla AzureActivity?",
    a: "Activity Log",
    options: ["Activity Log", "Service Endpoint", "Azure Kubernetes Service"],
    why: "Activity Log es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 propiedad identifica de forma \u00fanica un recurso?",
    a: "ResourceId",
    options: ["ResourceId", "Azure Policy", "Storage Account"],
    why: "ResourceId es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando apaga una VM?",
    a: "az vm stop",
    options: ["az vm stop", "Azure Advisor", "SQL Database"],
    why: "az vm stop es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando desasigna una VM?",
    a: "az vm deallocate",
    options: ["az vm deallocate", "Azure Kubernetes Service", "App Service"],
    why: "az vm deallocate es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de cuenta requiere replicas geo-secundarias?",
    a: "GRS / GZRS",
    options: ["GRS / GZRS", "Storage Account", "Virtual Network"],
    why: "GRS / GZRS es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 herramienta revisa policies aplicadas?",
    a: "Compliance (Azure Policy)",
    options: ["Compliance (Azure Policy)", "SQL Database", "VPN Gateway"],
    why: "Compliance (Azure Policy) es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio gestiona inicios de sesi\u00f3n y MFA?",
    a: "Azure AD",
    options: ["Azure AD", "App Service", "Private Endpoint"],
    why: "Azure AD es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando muestra todos los recursos del RG?",
    a: "az resource list",
    options: ["az resource list", "Virtual Network", "Azure Front Door"],
    why: "az resource list es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 formato usa bicep?",
    a: ".bicep",
    options: [".bicep", "VPN Gateway", "NSG"],
    why: ".bicep es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 herramienta convierte Bicep a ARM?",
    a: "bicep build",
    options: ["bicep build", "Private Endpoint", "Key Vault"],
    why: "bicep build es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio ejecuta scripts al iniciar una VM?",
    a: "Custom Script Extension",
    options: ["Custom Script Extension", "Azure Front Door", "Load Balancer"],
    why: "Custom Script Extension es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 configuraci\u00f3n evita que se borre un RG?",
    a: "Resource Lock \u2013 Delete",
    options: ["Resource Lock \u2013 Delete", "NSG", "Azure DevOps"],
    why: "Resource Lock \u2013 Delete es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio muestra disponibilidad entre regiones?",
    a: "Azure Traffic Manager",
    options: ["Azure Traffic Manager", "Key Vault", "Azure Functions"],
    why: "Azure Traffic Manager es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de VM es para bases de datos?",
    a: "Serie D/E",
    options: ["Serie D/E", "Load Balancer", "Traffic Manager"],
    why: "Serie D/E es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando crea una IP p\u00fablica?",
    a: "az network public-ip create",
    options: ["az network public-ip create", "Azure DevOps", "ExpressRoute"],
    why: "az network public-ip create es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tabla muestra errores de autenticaci\u00f3n?",
    a: "SigninLogs",
    options: ["SigninLogs", "Azure Functions", "Azure Firewall"],
    why: "SigninLogs es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 protocolo usa Azure SQL para conexi\u00f3n?",
    a: "1433",
    options: ["1433", "Traffic Manager", "Application Gateway"],
    why: "1433 es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio controla el cumplimiento normativo?",
    a: "Defender for Cloud",
    options: ["Defender for Cloud", "ExpressRoute", "Service Endpoint"],
    why: "Defender for Cloud es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 nivel de RBAC permite leer y escribir sin borrar?",
    a: "Contributor",
    options: ["Contributor", "Azure Firewall", "Azure Policy"],
    why: "Contributor es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio gestiona contenedores sin servidor?",
    a: "ACI (Azure Container Instances)",
    options: ["ACI (Azure Container Instances)", "Application Gateway", "Azure Advisor"],
    why: "ACI (Azure Container Instances) es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio usa contenedores escalables?",
    a: "AKS",
    options: ["AKS", "Service Endpoint", "Azure Kubernetes Service"],
    why: "AKS es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 se usa para crear usuarios en Azure AD?",
    a: "az ad user create",
    options: ["az ad user create", "Azure Policy", "Storage Account"],
    why: "az ad user create es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 herramienta centraliza la seguridad de Azure?",
    a: "Defender for Cloud",
    options: ["Defender for Cloud", "Azure Advisor", "SQL Database"],
    why: "Defender for Cloud es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 log guarda movimientos de RBAC?",
    a: "AzureActivity (Activity Log)",
    options: ["AzureActivity (Activity Log)", "Azure Kubernetes Service", "App Service"],
    why: "AzureActivity (Activity Log) es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando muestra las claves de un Storage?",
    a: "az storage account keys list",
    options: ["az storage account keys list", "Storage Account", "Virtual Network"],
    why: "az storage account keys list es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 nivel de soporte t\u00e9cnico incluye SLA?",
    a: "Support Plans (Standard, ProDirect)",
    options: ["Support Plans (Standard, ProDirect)", "SQL Database", "VPN Gateway"],
    why: "Support Plans (Standard, ProDirect) es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 se usa para enrutar tr\u00e1fico entre VNets?",
    a: "VNet Peering",
    options: ["VNet Peering", "App Service", "Private Endpoint"],
    why: "VNet Peering es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 SKU de Load Balancer permite reglas por zonas?",
    a: "Standard",
    options: ["Standard", "Virtual Network", "Azure Front Door"],
    why: "Standard es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 protocolo usa Key Vault para peticiones?",
    a: "HTTPS",
    options: ["HTTPS", "VPN Gateway", "NSG"],
    why: "HTTPS es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 se usa para listar grupos AD?",
    a: "az ad group list",
    options: ["az ad group list", "Private Endpoint", "Key Vault"],
    why: "az ad group list es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 es necesario para usar Azure Bastion?",
    a: "Subred AzureBastionSubnet",
    options: ["Subred AzureBastionSubnet", "Azure Front Door", "Load Balancer"],
    why: "Subred AzureBastionSubnet es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 caracter\u00edstica impide sobrescribir blobs?",
    a: "Immutability Policy",
    options: ["Immutability Policy", "NSG", "Azure DevOps"],
    why: "Immutability Policy es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 caracter\u00edstica evita regeneraci\u00f3n no autorizada de claves?",
    a: "Azure Key Vault",
    options: ["Azure Key Vault", "Key Vault", "Azure Functions"],
    why: "Azure Key Vault es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando importa una plantilla ARM?",
    a: "az deployment group create",
    options: ["az deployment group create", "Load Balancer", "Traffic Manager"],
    why: "az deployment group create es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 herramienta supervisa integridad de m\u00e1quinas h\u00edbridas?",
    a: "Azure Arc",
    options: ["Azure Arc", "Azure DevOps", "ExpressRoute"],
    why: "Azure Arc es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 recurso permite conectar on-prem a Azure?",
    a: "VPN Gateway",
    options: ["VPN Gateway", "Storage Account", "Virtual Network"],
    why: "VPN Gateway es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 habilita conexi\u00f3n privada a SQL DB?",
    a: "Private Endpoint",
    options: ["Private Endpoint", "SQL Database", "VPN Gateway"],
    why: "Private Endpoint es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 nivel de redundancia usa 3 copias locales?",
    a: "LRS",
    options: ["LRS", "ExpressRoute", "Service Endpoint"],
    why: "LRS es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 nivel usa 3 copias en otra regi\u00f3n?",
    a: "GRS",
    options: ["GRS", "Azure Firewall", "Azure Policy"],
    why: "GRS es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio usa reglas HTTP/HTTPS y WAF?",
    a: "Application Gateway",
    options: ["Application Gateway", "Private Endpoint", "Key Vault"],
    why: "Application Gateway es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 pol\u00edtica fuerza HTTPS en Storage?",
    a: "Secure transfer required",
    options: ["Secure transfer required", "Service Endpoint", "Azure Kubernetes Service"],
    why: "Secure transfer required es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando actualiza tama\u00f1o de VM?",
    a: "az vm resize",
    options: ["az vm resize", "Azure Policy", "Storage Account"],
    why: "az vm resize es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 herramienta permite ver costo por recurso?",
    a: "Cost Management",
    options: ["Cost Management", "Azure Advisor", "SQL Database"],
    why: "Cost Management es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tabla almacena logs de conexiones RDP/SSH?",
    a: "AzureDiagnostics",
    options: ["AzureDiagnostics", "Azure Kubernetes Service", "App Service"],
    why: "AzureDiagnostics es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio controla acceso Just-In-Time?",
    a: "Defender for Cloud",
    options: ["Defender for Cloud", "Storage Account", "Virtual Network"],
    why: "Defender for Cloud es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 protocolo usa la replicaci\u00f3n de ASR?",
    a: "HTTPS",
    options: ["HTTPS", "SQL Database", "VPN Gateway"],
    why: "HTTPS es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 herramienta muestra problemas de red?",
    a: "Network Watcher Troubleshoot",
    options: ["Network Watcher Troubleshoot", "App Service", "Private Endpoint"],
    why: "Network Watcher Troubleshoot es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 m\u00e9todo monta Azure Files en Windows?",
    a: "SMB",
    options: ["SMB", "Virtual Network", "Azure Front Door"],
    why: "SMB es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 m\u00e9todo monta Azure Files en Linux?",
    a: "SMB o NFS",
    options: ["SMB o NFS", "VPN Gateway", "NSG"],
    why: "SMB o NFS es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de automatizaci\u00f3n usa versiones?",
    a: "Runbooks",
    options: ["Runbooks", "Private Endpoint", "Key Vault"],
    why: "Runbooks es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 servicio centraliza la telemetr\u00eda de apps?",
    a: "Application Insights",
    options: ["Application Insights", "Azure Front Door", "Load Balancer"],
    why: "Application Insights es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando borra una IP p\u00fablica?",
    a: "az network public-ip delete",
    options: ["az network public-ip delete", "NSG", "Azure DevOps"],
    why: "az network public-ip delete es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 comando borra un NSG?",
    a: "az network nsg delete",
    options: ["az network nsg delete", "Key Vault", "Azure Functions"],
    why: "az network nsg delete es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 se usa para aislar recursos cr\u00edticos?",
    a: "Subred dedicada + NSG",
    options: ["Subred dedicada + NSG", "Load Balancer", "Traffic Manager"],
    why: "Subred dedicada + NSG es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 herramienta audita cambios en VM?",
    a: "Change Tracking",
    options: ["Change Tracking", "Azure DevOps", "ExpressRoute"],
    why: "Change Tracking es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "\u00bfQu\u00e9 tipo de Storage permite contenedores?",
    a: "StorageV2",
    options: ["StorageV2", "Azure Functions", "Azure Firewall"],
    why: "StorageV2 es la opci\u00f3n correcta porque es el servicio o caracter\u00edstica que resuelve la acci\u00f3n descrita. Refuerza el concepto clave del examen AZ-104."
  },
  {
    q: "¿Qué servicio gestiona dispositivos y endpoints?",
    a: "Intune",
    why: "Intune es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando elimina un usuario de Azure AD?",
    a: "az ad user delete",
    why: "az ad user delete es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso permite conectividad privada a un Storage Account?",
    a: "Private Endpoint",
    why: "Private Endpoint es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué protocolo permite transferencia SFTP en Azure Storage?",
    a: "SFTP sobre SSH",
    why: "SFTP sobre SSH es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando muestra la configuración de una VM?",
    a: "az vm show",
    why: "az vm show es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio crea reglas de autoscaling?",
    a: "Azure Monitor Autoscale",
    why: "Azure Monitor Autoscale es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso almacena copias de seguridad a largo plazo?",
    a: "Recovery Services Vault",
    why: "Recovery Services Vault es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de redundancia mantiene datos entre zonas?",
    a: "ZRS",
    why: "ZRS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de redundancia replica entre dos regiones?",
    a: "GRS",
    why: "GRS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué se usa para subir ficheros a un blob?",
    a: "az storage blob upload",
    why: "az storage blob upload es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio cifra bases de datos automáticamente?",
    a: "Transparent Data Encryption (TDE)",
    why: "Transparent Data Encryption (TDE) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio analiza dependencias entre recursos?",
    a: "Resource Graph",
    why: "Resource Graph es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando muestra IPs de una VM?",
    a: "az vm list-ip-addresses",
    why: "az vm list-ip-addresses es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta captura paquetes en la red?",
    a: "Network Watcher Packet Capture",
    why: "Network Watcher Packet Capture es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué configuración fuerza el uso de HTTPS en Storage?",
    a: "Secure transfer required",
    why: "Secure transfer required es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio protege claves criptográficas?",
    a: "Azure Key Vault",
    why: "Azure Key Vault es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea un contenedor de Storage?",
    a: "az storage container create",
    why: "az storage container create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué protocolo se usa para acceder a un File Share?",
    a: "SMB",
    why: "SMB es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué log refleja errores de CPU y memoria de VM?",
    a: "Perf",
    why: "Perf es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta detecta problemas de conectividad?",
    a: "Connection Monitor",
    why: "Connection Monitor es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio distribuye tráfico globalmente usando DNS?",
    a: "Traffic Manager",
    why: "Traffic Manager es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué se usa para enrutar tráfico sin usar VPN?",
    a: "VNet Peering",
    why: "VNet Peering es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea una NIC?",
    a: "az network nic create",
    why: "az network nic create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio proporciona recomendaciones de seguridad?",
    a: "Defender for Cloud",
    why: "Defender for Cloud es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea una VM con una imagen específica?",
    a: "az vm create --image",
    why: "az vm create --image es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso aplica reglas de firewall a nivel de aplicación?",
    a: "Application Gateway WAF",
    why: "Application Gateway WAF es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite ejecutar contenedores sin servidor?",
    a: "ACI (Azure Container Instances)",
    why: "ACI (Azure Container Instances) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando borra un disco?",
    a: "az disk delete",
    why: "az disk delete es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de acceso es óptimo para acceso frecuente?",
    a: "Hot",
    why: "Hot es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de acceso es óptimo para datos poco usados?",
    a: "Cool",
    why: "Cool es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de acceso es para archivado prolongado?",
    a: "Archive",
    why: "Archive es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio ofrece backup de Azure File Shares?",
    a: "Azure Backup",
    why: "Azure Backup es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta lista eventos de creación/borrado de recursos?",
    a: "Activity Log",
    why: "Activity Log es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio gestiona grupos de escalado automático de VMs?",
    a: "VM Scale Sets",
    why: "VM Scale Sets es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea un Load Balancer?",
    a: "az network lb create",
    why: "az network lb create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta revisa el cumplimiento de políticas?",
    a: "Azure Policy Compliance",
    why: "Azure Policy Compliance es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tipo de acceso permite borrar recursos?",
    a: "Owner",
    why: "Owner es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tipo de acceso permite gestión sin borrar?",
    a: "Contributor",
    why: "Contributor es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tipo de acceso permite solo lectura?",
    a: "Reader",
    why: "Reader es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite acceso Just-In-Time a VMs?",
    a: "Defender for Cloud JIT",
    why: "Defender for Cloud JIT es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio protege contra ataques volumétricos?",
    a: "DDoS Protection",
    why: "DDoS Protection es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tipo de IP usa una app con acceso a Internet?",
    a: "IP pública",
    why: "IP pública es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando sube un archivo al File Share?",
    a: "az storage file upload",
    why: "az storage file upload es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio analiza telemetría de aplicaciones?",
    a: "Application Insights",
    why: "Application Insights es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea una alerta?",
    a: "az monitor metrics alert create",
    why: "az monitor metrics alert create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla guarda logs de conexión RDP/SSH?",
    a: "AzureDiagnostics",
    why: "AzureDiagnostics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tipo de almacenamiento necesita NFS 4.1?",
    a: "Premium/Standard con NFS habilitado",
    why: "Premium/Standard con NFS habilitado es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué componente permite reglas inbound/outbound?",
    a: "NSG",
    why: "NSG es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite exponer APIs?",
    a: "API Management",
    why: "API Management es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista los grupos AD?",
    a: "az ad group list",
    why: "az ad group list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso permite centralizar políticas de gobierno?",
    a: "Azure Policy",
    why: "Azure Policy es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea un usuario con contraseña?",
    a: "az ad user create --password",
    why: "az ad user create --password es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta permite ver topología de red?",
    a: "Network Watcher Topology",
    why: "Network Watcher Topology es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tipo de VM está optimizada para CPU?",
    a: "Serie F",
    why: "Serie F es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué característica evita cambios no autorizados en Storage?",
    a: "Immutable Blob",
    why: "Immutable Blob es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista snapshots de discos?",
    a: "az snapshot list",
    why: "az snapshot list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio ejecuta scripts según programación?",
    a: "Azure Automation",
    why: "Azure Automation es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de redundancia ofrece el precio más bajo?",
    a: "LRS",
    why: "LRS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio controla acceso basado en identidad para apps?",
    a: "Managed Identity",
    why: "Managed Identity es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea un File Share?",
    a: "az storage share create",
    why: "az storage share create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué protocolo usa Azure Bastion?",
    a: "HTML5 sobre TLS (portal)",
    why: "HTML5 sobre TLS (portal) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla registra el estado del agente de VM?",
    a: "Heartbeat",
    why: "Heartbeat es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué característica evita borrado accidental de RG?",
    a: "Lock – Delete",
    why: "Lock – Delete es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso requiere la subnet AzureFirewallSubnet?",
    a: "Azure Firewall",
    why: "Azure Firewall es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista subredes del VNet?",
    a: "az network vnet subnet list",
    why: "az network vnet subnet list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio gestiona certificados SSL/TLS?",
    a: "Key Vault (certificates)",
    why: "Key Vault (certificates) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta muestra costo por servicio?",
    a: "Cost Management",
    why: "Cost Management es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de Storage es obligatorio para Private Endpoint?",
    a: "StorageV2",
    why: "StorageV2 es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla registra eventos de Azure AD?",
    a: "AuditLogs",
    why: "AuditLogs es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio usa Back-End Pool?",
    a: "Azure Load Balancer",
    why: "Azure Load Balancer es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué se usa para controlar el tráfico saliente por IP?",
    a: "NSG outbound rules",
    why: "NSG outbound rules es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué protocolo usa Key Vault para KMS?",
    a: "HTTPS",
    why: "HTTPS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite replicación continua de máquinas?",
    a: "Azure Site Recovery",
    why: "Azure Site Recovery es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando muestra consumo de cuota?",
    a: "az vm list-usage",
    why: "az vm list-usage es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta despliega plantillas ARM?",
    a: "ARM Deployment",
    why: "ARM Deployment es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla contiene métricas de discos?",
    a: "InsightsMetrics",
    why: "InsightsMetrics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso da DNS privado a recursos internos?",
    a: "Private DNS Zone",
    why: "Private DNS Zone es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tipo de VNet Peering permite tráfico entre regiones?",
    a: "Global VNet Peering",
    why: "Global VNet Peering es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando borra un grupo AD?",
    a: "az ad group delete",
    why: "az ad group delete es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio acelera entrega de contenido global?",
    a: "Azure CDN",
    why: "Azure CDN es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite API Gateway con seguridad?",
    a: "API Management",
    why: "API Management es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea una alerta programada de logs?",
    a: "az monitor scheduled-query",
    why: "az monitor scheduled-query es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso almacena certificados de cliente?",
    a: "Key Vault",
    why: "Key Vault es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tipo de backup guarda snapshots de VM?",
    a: "Azure Backup",
    why: "Azure Backup es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla registra consultas de Application Insights?",
    a: "AppTraces / AppRequests",
    why: "AppTraces / AppRequests es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta monitorea conexiones SSH caídas?",
    a: "Connection Monitor",
    why: "Connection Monitor es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio genera recomendaciones de coste?",
    a: "Azure Advisor (Costs)",
    why: "Azure Advisor (Costs) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista imágenes SIG?",
    a: "az sig image-version list",
    why: "az sig image-version list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tipo de acceso necesita borrar discos?",
    a: "Owner",
    why: "Owner es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué capacidad permite extraer diagnósticos de VM?",
    a: "Diagnostics Extension",
    why: "Diagnostics Extension es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio administra versiones de funciones serverless?",
    a: "Azure Functions",
    why: "Azure Functions es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla almacena latencias y métricas de red de AVD?",
    a: "WVDConnectionNetworkData",
    why: "WVDConnectionNetworkData es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando aumenta el tamaño de un disco?",
    a: "az disk update --size-gb",
    why: "az disk update --size-gb es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite automatizar tareas híbridas?",
    a: "Azure Arc + Automation",
    why: "Azure Arc + Automation es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué caracteristica bloquea acceso a Storage por IP?",
    a: "Firewall del Storage Account",
    why: "Firewall del Storage Account es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué log guarda reglas y operaciones de WAF?",
    a: "AzureDiagnostics",
    why: "AzureDiagnostics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando muestra el estado de autoscaling?",
    a: "az monitor autoscale show",
    why: "az monitor autoscale show es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso permite conectividad dedicada a ExpressRoute?",
    a: "ExpressRoute Gateway",
    why: "ExpressRoute Gateway es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta permite consultas globales a recursos?",
    a: "Resource Graph Explorer",
    why: "Resource Graph Explorer es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué configuración limita acceso por etiquetas?",
    a: "Azure Policy (deny/allow)",
    why: "Azure Policy (deny/allow) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite autenticación sin contraseña?",
    a: "Azure AD Passwordless",
    why: "Azure AD Passwordless es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando actualiza etiquetas de un recurso?",
    a: "az resource tag",
    why: "az resource tag es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio supervisa alcance, estado y alertas?",
    a: "Azure Monitor",
    why: "Azure Monitor es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de redundancia duplica datos en 3 zonas?",
    a: "ZRS",
    why: "ZRS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso define rutas personalizadas?",
    a: "UDR (User Defined Routes)",
    why: "UDR (User Defined Routes) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta comprueba conectividad entre dos IPs?",
    a: "Connection Monitor",
    why: "Connection Monitor es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista las regiones disponibles?",
    a: "az account list-locations",
    why: "az account list-locations es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué protocolo usa ACR para pulls?",
    a: "HTTPS",
    why: "HTTPS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio gestiona permisos para contenedores Docker?",
    a: "ACR (Azure Container Registry)",
    why: "ACR (Azure Container Registry) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea un snapshot de disco?",
    a: "az snapshot create",
    why: "az snapshot create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite acceso VPN a Azure?",
    a: "VPN Gateway",
    why: "VPN Gateway es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de Azure Firewall permite TLS inspection?",
    a: "Premium",
    why: "Premium es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista Load Balancers?",
    a: "az network lb list",
    why: "az network lb list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio gestiona DNS en Azure?",
    a: "Azure DNS",
    why: "Azure DNS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla guarda errores en aplicaciones?",
    a: "AppExceptions",
    why: "AppExceptions es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso permite restringir acceso por VNet a SQL?",
    a: "Private Endpoint",
    why: "Private Endpoint es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando muestra reglas de NSG?",
    a: "az network nsg rule list",
    why: "az network nsg rule list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta permite ver tráfico en tiempo real?",
    a: "NSG Flow Logs",
    why: "NSG Flow Logs es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tipo de clave usa Key Vault para cifrar?",
    a: "RSA o EC",
    why: "RSA o EC es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea un usuario en AD con UPN?",
    a: "az ad user create --user-principal-name",
    why: "az ad user create --user-principal-name es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite análisis avanzado de logs?",
    a: "Log Analytics",
    why: "Log Analytics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de redundancia replica entre regiones + zonas?",
    a: "GZRS",
    why: "GZRS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio carga un script al despliegue de VM?",
    a: "Custom Script Extension",
    why: "Custom Script Extension es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista VMs por RG?",
    a: "az vm list -g <nombreRG>",
    why: "az vm list -g <nombreRG> es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta analiza asociaciones de NSG/subred?",
    a: "Effective Security Rules",
    why: "Effective Security Rules es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso protege contra ataques web?",
    a: "WAF (Web Application Firewall)",
    why: "WAF (Web Application Firewall) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea una regla NSG?",
    a: "az network nsg rule create",
    why: "az network nsg rule create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio recoge datos de contenedores en AKS?",
    a: "Azure Monitor Container Insights",
    why: "Azure Monitor Container Insights es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio gestiona identidades para contenedores?",
    a: "Managed Identity",
    why: "Managed Identity es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista todas las claves de Key Vault?",
    a: "az keyvault key list",
    why: "az keyvault key list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla guarda eventos de auditoría de Azure AD?",
    a: "AuditLogs",
    why: "AuditLogs es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta automatiza acciones con eventos?",
    a: "Logic Apps",
    why: "Logic Apps es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué modo aplica Azure Policy por recurso?",
    a: "Mode = All / Indexed",
    why: "Mode = All / Indexed es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso es obligatorio para Azure Bastion?",
    a: "AzureBastionSubnet",
    why: "AzureBastionSubnet es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando exporta recursos a JSON?",
    a: "az group export",
    why: "az group export es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio centraliza telemetría para AKS?",
    a: "Container Insights",
    why: "Container Insights es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla contiene información de CPU de VM?",
    a: "Perf",
    why: "Perf es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué protocolo usa Azure SQL Managed Instance?",
    a: "TDS (1433)",
    why: "TDS (1433) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando elimina un Key Vault?",
    a: "az keyvault delete",
    why: "az keyvault delete es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué política evita creación de recursos sin etiquetas?",
    a: "Deny Policy",
    why: "Deny Policy es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio gestiona inventario de máquinas híbridas?",
    a: "Azure Arc",
    why: "Azure Arc es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso asigna identidades a scripts Automation?",
    a: "Managed Identity for Automation",
    why: "Managed Identity for Automation es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista los Gateways?",
    a: "az network vnet-gateway list",
    why: "az network vnet-gateway list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio da acceso a máquinas vía web sin RDP?",
    a: "Azure Bastion",
    why: "Azure Bastion es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué protocolo usa SMB de Azure Files?",
    a: "445 (TCP)",
    why: "445 (TCP) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta revisa cambios de configuración en Storage?",
    a: "Change Feed",
    why: "Change Feed es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando genera contraseñas para máquinas?",
    a: "az vm user update",
    why: "az vm user update es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite DNS privados?",
    a: "Private DNS",
    why: "Private DNS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué log registra actividad del Load Balancer?",
    a: "AzureDiagnostics",
    why: "AzureDiagnostics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio recolecta métricas y logs de AVD?",
    a: "Azure Monitor + WVD Logs",
    why: "Azure Monitor + WVD Logs es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite autenticar máquinas on-prem en Azure?",
    a: "Azure Arc",
    why: "Azure Arc es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando muestra la info completa de un RG?",
    a: "az group show",
    why: "az group show es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso permite compartir tráfico entre múltiples regiones?",
    a: "Traffic Manager",
    why: "Traffic Manager es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de redundancia NO replica fuera de la región?",
    a: "LRS y ZRS",
    why: "LRS y ZRS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando elimina una subnet?",
    a: "az network vnet subnet delete",
    why: "az network vnet subnet delete es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio monitorea estados de VM (CPU, RAM)?",
    a: "VM Insights",
    why: "VM Insights es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla guarda logs de Application Gateway?",
    a: "AzureDiagnostics",
    why: "AzureDiagnostics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué protocolo cifra datos en tránsito a Storage?",
    a: "TLS 1.2",
    why: "TLS 1.2 es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea un Key Vault?",
    a: "az keyvault create",
    why: "az keyvault create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite automatizar procesos complejos con conectores?",
    a: "Logic Apps",
    why: "Logic Apps es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué método da permisos a una app sin credenciales?",
    a: "Managed Identity",
    why: "Managed Identity es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué se usa para enrutar tráfico hacia appliances virtuales?",
    a: "UDR",
    why: "UDR es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tipo de Storage soporta “Azure Files NFS”?",
    a: "Premium File Shares",
    why: "Premium File Shares es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando muestra el plan de App Service?",
    a: "az appservice plan show",
    why: "az appservice plan show es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla almacena logs de Sign-in?",
    a: "SigninLogs",
    why: "SigninLogs es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio usa reglas por prioridad?",
    a: "NSG",
    why: "NSG es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta revisa inconsistencias de configuración?",
    a: "Azure Advisor",
    why: "Azure Advisor es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista secrets del Key Vault?",
    a: "az keyvault secret list",
    why: "az keyvault secret list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio detecta vulnerabilidades en VMs?",
    a: "Defender for Cloud",
    why: "Defender for Cloud es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué protocolo usa Azure Kubernetes Service?",
    a: "HTTPS para API server",
    why: "HTTPS para API server es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea un escalado automático?",
    a: "az monitor autoscale create",
    why: "az monitor autoscale create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso administra direcciones IP internas?",
    a: "VNet/Subnet",
    why: "VNet/Subnet es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta captura tráfico para análisis forense?",
    a: "Packet Capture",
    why: "Packet Capture es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite alertas basadas en consultas KQL?",
    a: "Log Analytics Alerts",
    why: "Log Analytics Alerts es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando borra una alerta?",
    a: "az monitor alert delete",
    why: "az monitor alert delete es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla muestra fallos de conexión a Storage?",
    a: "AzureDiagnostics",
    why: "AzureDiagnostics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite encriptar claves con HSM dedicado?",
    a: "Azure Key Vault Managed HSM",
    why: "Azure Key Vault Managed HSM es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista roles disponibles?",
    a: "az role definition list",
    why: "az role definition list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio gestiona discos Ultra SSD?",
    a: "Managed Disks",
    why: "Managed Disks es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué modo usa Azure Policy para aplicar cambios?",
    a: "DeployIfNotExists / Modify",
    why: "DeployIfNotExists / Modify es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando actualiza reglas de NSG?",
    a: "az network nsg rule update",
    why: "az network nsg rule update es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio gestiona configuración de VM en Azure Arc?",
    a: "Guest Configuration",
    why: "Guest Configuration es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla guarda latencias de discos?",
    a: "InsightsMetrics",
    why: "InsightsMetrics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio administra conectividad privada entre VNets y on-prem?",
    a: "ExpressRoute",
    why: "ExpressRoute es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista claves SAS?",
    a: "az storage account generate-sas",
    why: "az storage account generate-sas es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso es obligatorio para un Azure Firewall?",
    a: "AzureFirewallSubnet",
    why: "AzureFirewallSubnet es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de LB usa health probes avanzados?",
    a: "Standard LB",
    why: "Standard LB es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando genera una imagen personalizada de VM?",
    a: "az image create",
    why: "az image create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio recoge logs de Azure AD?",
    a: "Azure AD Diagnostic Logs",
    why: "Azure AD Diagnostic Logs es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta muestra dependencias entre componentes de app?",
    a: "Application Map (Insights)",
    why: "Application Map (Insights) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio detecta puertos expuestos en VMs?",
    a: "Defender for Cloud",
    why: "Defender for Cloud es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando cambia reglas de UDR?",
    a: "az network route-table route update",
    why: "az network route-table route update es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla guarda datos de autoscaling?",
    a: "AzureMetrics",
    why: "AzureMetrics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio gestiona inventario de software en VMs?",
    a: "Change Tracking",
    why: "Change Tracking es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando cambia nombre de un RG?",
    a: "No existe; hay que recrearlo",
    why: "No existe; hay que recrearlo es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite backups a nivel de sistema?",
    a: "Azure Backup",
    why: "Azure Backup es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué protocolo se usa para conexiones HTTPS globales?",
    a: "TLS",
    why: "TLS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso permite App Gateway con WAF?",
    a: "Application Gateway WAF_v2",
    why: "Application Gateway WAF_v2 es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando forza reinicio de VM?",
    a: "az vm restart",
    why: "az vm restart es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta genera consultas de impacto de costes?",
    a: "Cost Management + Advisor",
    why: "Cost Management + Advisor es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite cifrado doble en discos?",
    a: "Double Encryption (Key Vault + Platform)",
    why: "Double Encryption (Key Vault + Platform) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando despliega una plantilla ARM a nivel de suscripción?",
    a: "az deployment sub create",
    why: "az deployment sub create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso usa reglas L7 para distribuir tráfico?",
    a: "Application Gateway",
    why: "Application Gateway es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla registra errores de Key Vault?",
    a: "AzureDiagnostics",
    why: "AzureDiagnostics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de redundancia replica 6 copias globalmente?",
    a: "GRS",
    why: "GRS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista los certificados de Key Vault?",
    a: "az keyvault certificate list",
    why: "az keyvault certificate list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio detecta apps sin parches?",
    a: "Defender for Cloud",
    why: "Defender for Cloud es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando añade una etiqueta a un RG?",
    a: "az group update --set tags",
    why: "az group update --set tags es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta permite ver el consumo histórico de CPU?",
    a: "Metrics Explorer",
    why: "Metrics Explorer es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite enrutar tráfico HTTPS entrante?",
    a: "Application Gateway",
    why: "Application Gateway es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando genera credenciales temporales SAS?",
    a: "az storage account generate-sas",
    why: "az storage account generate-sas es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio evalúa configuraciones de seguridad por CIS Benchmark?",
    a: "Defender for Cloud",
    why: "Defender for Cloud es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando muestra reglas efectivas de NSG?",
    a: "az network nic list-effective-nsg",
    why: "az network nic list-effective-nsg es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta verifica compatibilidad para migración?",
    a: "Azure Migrate",
    why: "Azure Migrate es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla registra métricas de contenedores en AKS?",
    a: "InsightsMetrics",
    why: "InsightsMetrics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio administra identidades para automatización?",
    a: "Managed Identity en Automation",
    why: "Managed Identity en Automation es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando limpia máquinas detenidas automáticamente?",
    a: "No existe; se gestiona con políticas o scripts",
    why: "No existe; se gestiona con políticas o scripts es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio usa WAF para inspección HTTP?",
    a: "Application Gateway WAF",
    why: "Application Gateway WAF es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando muestra políticas aplicadas?",
    a: "az policy assignment list",
    why: "az policy assignment list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta muestra vulnerabilidades en contenedores?",
    a: "Defender for Containers",
    why: "Defender for Containers es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de Redundancia usa 9 copias regionales?",
    a: "GZRS",
    why: "GZRS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando configura un Private Endpoint?",
    a: "az network private-endpoint create",
    why: "az network private-endpoint create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio almacena configuraciones de runbooks?",
    a: "Azure Automation",
    why: "Azure Automation es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla registra eventos de acceso a Storage?",
    a: "AzureDiagnostics",
    why: "AzureDiagnostics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta permite scriptar Azure vía portal?",
    a: "CloudShell",
    why: "CloudShell es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea un UDR?",
    a: "az network route-table create",
    why: "az network route-table create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea una ruta dentro del UDR?",
    a: "az network route-table route create",
    why: "az network route-table route create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio protege contra eliminación no autorizada de Backup?",
    a: "Soft Delete",
    why: "Soft Delete es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué protocolo usa Traffic Manager?",
    a: "DNS",
    why: "DNS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio inspecciona tráfico TLS 1.2?",
    a: "Azure Firewall Premium",
    why: "Azure Firewall Premium es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista recursos sin etiquetas?",
    a: "az resource list --tag \"\"",
    why: "az resource list --tag \"\" es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio supervisa dependencias de apps distribuidas?",
    a: "Application Map",
    why: "Application Map es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea un recurso App Service Plan?",
    a: "az appservice plan create",
    why: "az appservice plan create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla registra errores de autoscaling?",
    a: "AzureActivity",
    why: "AzureActivity es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando borra un Private Endpoint?",
    a: "az network private-endpoint delete",
    why: "az network private-endpoint delete es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio usa zonas para alta disponibilidad?",
    a: "Zone-redundant services",
    why: "Zone-redundant services es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea un Storage Account?",
    a: "az storage account create",
    why: "az storage account create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio detecta configuraciones inseguras?",
    a: "Defender for Cloud Posture Management",
    why: "Defender for Cloud Posture Management es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué protocolo usa ExpressRoute?",
    a: "BGP",
    why: "BGP es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista discos Ultra disponibles?",
    a: "az disk list (filtrando SKU)",
    why: "az disk list (filtrando SKU) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla registra operaciones de autosave de VM?",
    a: "AzureActivity",
    why: "AzureActivity es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio aplica reglas de acceso condicional?",
    a: "Azure AD",
    why: "Azure AD es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista instancias dentro de un VMSS?",
    a: "az vmss list-instances",
    why: "az vmss list-instances es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando reinicia un VMSS completo?",
    a: "az vmss restart",
    why: "az vmss restart es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta analiza logs de CPU, memoria y disco?",
    a: "InsightsMetrics + Perf",
    why: "InsightsMetrics + Perf es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio protege acceso SSH/RDP?",
    a: "Just-In-Time (Defender for Cloud)",
    why: "Just-In-Time (Defender for Cloud) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla almacena errores de FSLogix?",
    a: "WVDErrors / WVDConnections (según origen)",
    why: "WVDErrors / WVDConnections (según origen) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista Workspaces de Log Analytics?",
    a: "az monitor log-analytics workspace list",
    why: "az monitor log-analytics workspace list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite clonar configuraciones de red entre VNets?",
    a: "No existe; se replica manualmente o con ARM/Bicep",
    why: "No existe; se replica manualmente o con ARM/Bicep es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso gestiona tráfico interno entre subredes?",
    a: "NSG",
    why: "NSG es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite aplicar configuraciones a máquinas híbridas?",
    a: "Guest Configuration (Azure Arc)",
    why: "Guest Configuration (Azure Arc) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista los roles asignados a un usuario?",
    a: "az role assignment list --assignee",
    why: "az role assignment list --assignee es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso permite analizar tráfico hacia SQL?",
    a: "Private Endpoint + NSG Flow Logs",
    why: "Private Endpoint + NSG Flow Logs es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de redundancia es más resistente dentro de una región?",
    a: "ZRS",
    why: "ZRS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando permite capturar paquetes en una NIC?",
    a: "az network watcher packet-capture create",
    why: "az network watcher packet-capture create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio detecta malware en VMs?",
    a: "Defender for Cloud",
    why: "Defender for Cloud es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea una red virtual?",
    a: "az network vnet create",
    why: "az network vnet create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso registra cambios de configuración por política?",
    a: "Azure Policy – Compliance",
    why: "Azure Policy – Compliance es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista conexiones de aplicativo en App Service?",
    a: "az webapp log tail",
    why: "az webapp log tail es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tecnología usa Log Analytics para consultas?",
    a: "KQL (Kusto Query Language)",
    why: "KQL (Kusto Query Language) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta permite detectar rutas incorrectas?",
    a: "Effective Routes",
    why: "Effective Routes es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio audita cambios en Azure AD?",
    a: "Audit Logs",
    why: "Audit Logs es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando borra un VM Scale Set?",
    a: "az vmss delete",
    why: "az vmss delete es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla registra operaciones de disco?",
    a: "InsightsMetrics",
    why: "InsightsMetrics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando genera un reporte de costos?",
    a: "az consumption usage list",
    why: "az consumption usage list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio garantiza descubrimiento automático de dependencias?",
    a: "Service Map",
    why: "Service Map es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando asigna un rol RBAC?",
    a: "az role assignment create",
    why: "az role assignment create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso permite certificados para aplicaciones web?",
    a: "Key Vault Certificates",
    why: "Key Vault Certificates es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea una variable en Automation?",
    a: "az automation variable create",
    why: "az automation variable create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio gestiona contenedores orquestados?",
    a: "AKS",
    why: "AKS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta muestra timeouts de conexión?",
    a: "Connection Monitor",
    why: "Connection Monitor es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando permite subir ficheros masivos a Storage?",
    a: "azcopy",
    why: "azcopy es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio usa políticas de acceso centralizadas?",
    a: "Azure Policy",
    why: "Azure Policy es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla registra conexiones a AVD?",
    a: "WVDConnections",
    why: "WVDConnections es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando sincroniza configuraciones entre RGs?",
    a: "No existe; se usan plantillas ARM/Bicep",
    why: "No existe; se usan plantillas ARM/Bicep es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite IPs públicas por zona?",
    a: "Standard Public IP",
    why: "Standard Public IP es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista escalados de autoscaling?",
    a: "az monitor autoscale list",
    why: "az monitor autoscale list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio recopila logs de contenedores en AKS?",
    a: "Container Insights",
    why: "Container Insights es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando muestra el usuario asignado a una VM?",
    a: "az vm show --query osProfile",
    why: "az vm show --query osProfile es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de acceso permite sólo lectura básica?",
    a: "Reader",
    why: "Reader es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio identifica puertos abiertos inseguros?",
    a: "Defender for Cloud",
    why: "Defender for Cloud es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea una tabla desde KQL?",
    a: "No se puede; Log Analytics crea tablas automáticamente",
    why: "No se puede; Log Analytics crea tablas automáticamente es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso permite acceso interno a Functions?",
    a: "Private Endpoint",
    why: "Private Endpoint es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista identificadores de suscripción?",
    a: "az account list",
    why: "az account list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta detecta problemas en discos?",
    a: "Metrics + InsightsMetrics",
    why: "Metrics + InsightsMetrics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea un certificado autosignado en Key Vault?",
    a: "az keyvault certificate create",
    why: "az keyvault certificate create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio administra snapshots incrementales?",
    a: "Managed Disks",
    why: "Managed Disks es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando detiene un VMSS?",
    a: "az vmss stop",
    why: "az vmss stop es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla registra errores de Azure Firewall?",
    a: "AzureDiagnostics",
    why: "AzureDiagnostics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio detecta configuraciones de red incorrectas?",
    a: "Network Watcher",
    why: "Network Watcher es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando permite resetear RDP en una VM?",
    a: "az vm user reset-rdp",
    why: "az vm user reset-rdp es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite gobernanza a gran escala?",
    a: "Management Groups",
    why: "Management Groups es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea un Management Group?",
    a: "az account management-group create",
    why: "az account management-group create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso registra actividad de clonación de disks?",
    a: "Activity Log",
    why: "Activity Log es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio administra IPs estáticas globales?",
    a: "Azure Public IP",
    why: "Azure Public IP es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando despliega recursos a un RG?",
    a: "az deployment group create",
    why: "az deployment group create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio detecta configuraciones de TLS débiles?",
    a: "Defender for Cloud",
    why: "Defender for Cloud es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando borra una Function App?",
    a: "az functionapp delete",
    why: "az functionapp delete es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué log registra creación de reglas NSG?",
    a: "AzureActivity",
    why: "AzureActivity es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta usa KQL para búsquedas globales en Azure?",
    a: "Resource Graph",
    why: "Resource Graph es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite aplicar políticas a varias suscripciones?",
    a: "Management Groups",
    why: "Management Groups es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando muestra límites de una suscripción?",
    a: "az account list-locations / az vm list-usage",
    why: "az account list-locations / az vm list-usage es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio recopila métricas de red de VM?",
    a: "Network Watcher",
    why: "Network Watcher es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea una regla de Application Gateway?",
    a: "az network application-gateway rule create",
    why: "az network application-gateway rule create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla guarda errores de identidad en Key Vault?",
    a: "AzureDiagnostics",
    why: "AzureDiagnostics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio gestiona copias de seguridad centralizadas?",
    a: "Recovery Services Vault",
    why: "Recovery Services Vault es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea un autoscale rule?",
    a: "az monitor autoscale rule create",
    why: "az monitor autoscale rule create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de redundancia usa replicación entre zonas?",
    a: "ZRS",
    why: "ZRS es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso se usa para ruta por defecto hacia firewall?",
    a: "UDR (0.0.0.0/0)",
    why: "UDR (0.0.0.0/0) es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando muestra configuraciones de ExpressRoute?",
    a: "az network express-route show",
    why: "az network express-route show es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio inspecciona tráfico TLS entrante y saliente?",
    a: "Azure Firewall Premium",
    why: "Azure Firewall Premium es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla registra sesiones de VM en AVD?",
    a: "WVDConnections",
    why: "WVDConnections es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando instala extensiones en una VM?",
    a: "az vm extension set",
    why: "az vm extension set es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso permite acceso privado a App Service?",
    a: "Private Endpoint",
    why: "Private Endpoint es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio analiza tráfico global y latencia DNS?",
    a: "Traffic Manager",
    why: "Traffic Manager es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista claves de acceso de almacenamiento?",
    a: "az storage account keys list",
    why: "az storage account keys list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla registra métricas de CPU por proceso?",
    a: "Perf",
    why: "Perf es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite ejecución de scripts sin servidor?",
    a: "Azure Functions",
    why: "Azure Functions es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando borra un Storage Account?",
    a: "az storage account delete",
    why: "az storage account delete es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de acceso requiere acceso frecuente?",
    a: "Hot",
    why: "Hot es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel de acceso se usa para datos fríos accesibles ocasionalmente?",
    a: "Cool",
    why: "Cool es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué nivel se usa para archivado de larga duración?",
    a: "Archive",
    why: "Archive es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando genera un SAS para un contenedor?",
    a: "az storage container generate-sas",
    why: "az storage container generate-sas es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio centraliza logs y métricas?",
    a: "Azure Monitor",
    why: "Azure Monitor es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando reinicia un Application Gateway?",
    a: "No existe; servicio gestionado",
    why: "No existe; servicio gestionado es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso monitoriza errores de VMSS?",
    a: "Azure Monitor + Activity Log",
    why: "Azure Monitor + Activity Log es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista dominios de Azure AD?",
    a: "az ad domain list",
    why: "az ad domain list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite acceso condicional?",
    a: "Azure AD Conditional Access",
    why: "Azure AD Conditional Access es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla registra errores de autenticación?",
    a: "SigninLogs",
    why: "SigninLogs es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando despliega un Bicep a un RG?",
    a: "az deployment group create --template-file main.bicep",
    why: "az deployment group create --template-file main.bicep es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite conectividad privada global?",
    a: "Private Link",
    why: "Private Link es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué log registra cambios de configuración en una VM?",
    a: "ChangeTracking",
    why: "ChangeTracking es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando permite ver uso de red de una VM?",
    a: "az monitor metrics list",
    why: "az monitor metrics list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio detecta vulnerabilidades en contenedores?",
    a: "Defender for Containers",
    why: "Defender for Containers es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla guarda logs de WAF?",
    a: "AzureDiagnostics",
    why: "AzureDiagnostics es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando cambia tamaño de un App Service Plan?",
    a: "az appservice plan update",
    why: "az appservice plan update es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite supervisar rutas efectivas?",
    a: "Network Watcher – Effective Routes",
    why: "Network Watcher – Effective Routes es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea un Private DNS Zone?",
    a: "az network private-dns zone create",
    why: "az network private-dns zone create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso usa escalado basado en métricas?",
    a: "VM Scale Set",
    why: "VM Scale Set es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando permite mover recursos entre RGs?",
    a: "az resource move",
    why: "az resource move es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite analíticas en tiempo real para apps?",
    a: "Application Insights",
    why: "Application Insights es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando lista extensiones instaladas en una VM?",
    a: "az vm extension list",
    why: "az vm extension list es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso bloquea acceso público a Storage?",
    a: "Private Endpoint + Public Access Disabled",
    why: "Private Endpoint + Public Access Disabled es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué herramienta analiza todas las suscripciones con KQL?",
    a: "Resource Graph Explorer",
    why: "Resource Graph Explorer es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando crea una imagen generalizada de VM?",
    a: "az image create",
    why: "az image create es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué servicio permite auditoría continua de seguridad?",
    a: "Defender for Cloud",
    why: "Defender for Cloud es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué tabla guarda información de latencia de red en AVD?",
    a: "WVDConnectionNetworkData",
    why: "WVDConnectionNetworkData es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando restaura backups de Azure Files?",
    a: "az backup recoveryfile",
    why: "az backup recoveryfile es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué recurso implementa inspección L7 avanzada?",
    a: "Application Gateway",
    why: "Application Gateway es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },
  {
    q: "¿Qué comando detiene completamente una VM liberando recursos?",
    a: "az vm deallocate",
    why: "az vm deallocate es la opción correcta porque responde directamente a la acción o recurso descrito para el examen AZ-104."
  },

];

const questionsContainer = document.getElementById('questions');
const template = document.getElementById('questionCard');
const progressCount = document.getElementById('progressCount');
const progressTotal = document.getElementById('progressTotal');
const searchInput = document.getElementById('search');
const blockFilter = document.getElementById('blockFilter');
const hideCompletedToggle = document.getElementById('hideCompleted');
const examModeToggle = document.getElementById('examMode');
const revealAllButton = document.getElementById('revealAll');
const resetButton = document.getElementById('resetState');

const BLOCK_SIZE = 50;
const STORAGE_KEY = 'az104-quiz-bloques';
const DISTRACTOR_POOL = [
  'Azure Backup',
  'Azure Firewall',
  'Azure Front Door',
  'Traffic Manager',
  'App Service',
  'Azure Monitor',
  'Azure Policy',
  'Azure DevOps',
  'Application Gateway',
  'Key Vault',
  'NSG',
  'Log Analytics',
  'Storage Account',
  'Service Bus',
  'Event Grid',
  'ExpressRoute',
  'Azure Bastion',
  'VM Scale Set'
];

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { completed: {}, revealed: {}, examMode: false, answers: {}, results: {} };
  } catch (error) {
    console.error('No se pudo leer localStorage', error);
    return { completed: {}, revealed: {}, examMode: false, answers: {}, results: {} };
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

if (typeof state.examMode === 'undefined') {
  state.examMode = false;
}
if (!state.answers) state.answers = {};
if (!state.results) state.results = {};
examModeToggle.checked = state.examMode;

function getBlockFromNumber(number) {
  return Math.floor((number - 1) / BLOCK_SIZE) + 1;
}

function populateBlockFilter() {
  const totalBlocks = Math.ceil(questionsData.length / BLOCK_SIZE);
  blockFilter.innerHTML = '';

  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = 'Todos los bloques';
  blockFilter.appendChild(allOption);

  for (let i = 1; i <= totalBlocks; i += 1) {
    const option = document.createElement('option');
    option.value = String(i);
    option.textContent = `Bloque ${i}`;
    blockFilter.appendChild(option);
  }
}

populateBlockFilter();

function getOptions(item, index) {
  if (Array.isArray(item.options) && item.options.length >= 3) {
    return item.options;
  }

  const pool = DISTRACTOR_POOL.filter((opt) => opt !== item.a);
  const start = index % pool.length;
  const dynamic = [];

  for (let i = 0; dynamic.length < 2; i += 1) {
    const candidate = pool[(start + i) % pool.length];
    if (!dynamic.includes(candidate)) {
      dynamic.push(candidate);
    }
  }

  return [item.a, ...dynamic];
}

function renderQuestions() {
  questionsContainer.innerHTML = '';
  const filter = searchInput.value.toLowerCase();
  const selectedBlock = blockFilter.value;
  const hideCompleted = hideCompletedToggle.checked;
  const examMode = examModeToggle.checked;

  revealAllButton.disabled = examMode;

  questionsData.forEach((item, index) => {
    const number = index + 1;
    const block = getBlockFromNumber(number);
    const isCompleted = Boolean(state.completed[number]);
    const isRevealed = !examMode && Boolean(state.revealed[number]);
    const matchesFilter = item.q.toLowerCase().includes(filter) || item.a.toLowerCase().includes(filter);

    if (hideCompleted && isCompleted) return;
    if (filter && !matchesFilter) return;
    if (selectedBlock !== 'all' && block !== Number(selectedBlock)) return;

    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('.card__number').textContent = number;
    node.querySelector('.card__block').textContent = block;
    node.querySelector('.card__title').textContent = item.q;
    node.querySelector('.card__answer-text').textContent = item.a;
    node.querySelector('.card__why-text').textContent = item.why;

    const optionsContainer = node.querySelector('.card__options');
    const currentAnswer = state.answers[number];
    const options = getOptions(item, index);

    options.forEach((option) => {
      const optionLabel = document.createElement('label');
      optionLabel.className = 'option';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q-${number}`;
      input.value = option;
      input.checked = currentAnswer === option;
      const text = document.createElement('span');
      text.textContent = option;
      optionLabel.appendChild(input);
      optionLabel.appendChild(text);

      input.addEventListener('change', () => {
        state.answers[number] = option;
        const isCorrect = option === item.a;
        state.results[number] = isCorrect;
        setCardStatus(node, isCorrect);
        updateProgress();
        saveState(state);
      });

      optionsContainer.appendChild(optionLabel);
    });

    const answer = node.querySelector('.card__answer');
    const toggle = node.querySelector('.card__toggle');
    const check = node.querySelector('.card__check');
    setCardStatus(node, state.results[number]);

    if (isRevealed) {
      answer.hidden = false;
      toggle.textContent = 'Ocultar respuesta';
    }

    if (!isRevealed) {
      toggle.textContent = 'Mostrar respuesta y explicación';
    }

    check.checked = isCompleted;
    if (isCompleted) node.classList.add('completed');

    toggle.addEventListener('click', () => {
      const nowVisible = answer.hidden;
      answer.hidden = !answer.hidden;
      toggle.textContent = nowVisible ? 'Ocultar respuesta' : 'Mostrar respuesta y explicación';
      state.revealed[number] = !answer.hidden;
      saveState(state);
    });

    check.addEventListener('change', (event) => {
      state.completed[number] = event.target.checked;
      if (!event.target.checked) delete state.completed[number];
      node.classList.toggle('completed', event.target.checked);
      updateProgress();
      saveState(state);
      if (hideCompletedToggle.checked) renderQuestions();
    });

    questionsContainer.appendChild(node);
  });
}

function updateProgress() {
  const correctCount = Object.values(state.results).filter(Boolean).length;
  progressCount.textContent = correctCount;
  if (progressTotal) {
    progressTotal.textContent = questionsData.length;
  }
}

function setCardStatus(card, result) {
  const status = card.querySelector('.card__status');
  status.classList.remove('card__status--correct', 'card__status--incorrect');

  if (result === true) {
    status.textContent = '¡Correcto!';
    status.classList.add('card__status--correct');
  } else if (result === false) {
    status.textContent = 'Incorrecto, revisa y vuelve a intentar.';
    status.classList.add('card__status--incorrect');
  } else {
    status.textContent = '';
  }
}

searchInput.addEventListener('input', renderQuestions);
blockFilter.addEventListener('change', renderQuestions);
hideCompletedToggle.addEventListener('change', renderQuestions);
examModeToggle.addEventListener('change', (event) => {
  state.examMode = event.target.checked;
  saveState(state);
  renderQuestions();
});

revealAllButton.addEventListener('click', () => {
  questionsData.forEach((_, index) => {
    state.revealed[index + 1] = true;
  });
  saveState(state);
  renderQuestions();
});

resetButton.addEventListener('click', () => {
  state = { completed: {}, revealed: {}, examMode: false, answers: {}, results: {} };
  saveState(state);
  searchInput.value = '';
  hideCompletedToggle.checked = false;
  examModeToggle.checked = false;
  renderQuestions();
  updateProgress();
});

renderQuestions();
updateProgress();
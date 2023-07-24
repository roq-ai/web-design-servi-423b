const mapping: Record<string, string> = {
  clients: 'client',
  feedbacks: 'feedback',
  projects: 'project',
  'subscription-plans': 'subscription_plan',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

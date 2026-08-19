export interface Route {
  path: string;
  methods: string[];
  middlewares?: string[];
}
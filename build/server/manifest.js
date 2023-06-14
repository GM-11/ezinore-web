const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Aspekta-500.ttf","fonts/Supreme-Variable.ttf"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c2be8821.js","imports":["_app/immutable/entry/start.c2be8821.js","_app/immutable/chunks/index.42ebd149.js","_app/immutable/chunks/singletons.5ee4387c.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.72e26a1c.js","imports":["_app/immutable/entry/app.72e26a1c.js","_app/immutable/chunks/index.42ebd149.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-d35409b1.js'),
			() => import('./chunks/1-6ab14fbc.js'),
			() => import('./chunks/2-be152a16.js'),
			() => import('./chunks/3-69cb2590.js'),
			() => import('./chunks/4-5cec830d.js'),
			() => import('./chunks/5-3081f4fd.js'),
			() => import('./chunks/6-56cce622.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/calculation-result",
				pattern: /^\/calculation-result\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: () => import('./chunks/_server.ts-5f441962.js')
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: () => import('./chunks/_server.ts-e97ac492.js')
			},
			{
				id: "/product",
				pattern: /^\/product\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/razorpay",
				pattern: /^\/razorpay\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-4ed993c7.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map

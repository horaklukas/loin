var context = require.context('./src', true, /-test\.cjsx$/);
context.keys().forEach(context);
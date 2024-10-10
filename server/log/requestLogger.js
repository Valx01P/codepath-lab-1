// const requestLogger = (req, res, next) => {
//     const timestamp = new Date().toISOString();
//     const { method, url, headers, body, query, params } = req;
  
//     console.log('--------------------');
//     console.log(`[${timestamp}] Incoming Request:`);
//     console.log(`Method: ${method}`);
//     console.log(`URL: ${url}`);
//     console.log('Headers:', JSON.stringify(headers, null, 2));
//     console.log('Query Parameters:', JSON.stringify(query, null, 2));
//     console.log('Route Parameters:', JSON.stringify(params, null, 2));
//     console.log('Body:', JSON.stringify(body, null, 2));
//     console.log('--------------------');
  
//     next();
//   };

import util from 'util'

const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();

  console.log('\n====================');
  console.log(`[${timestamp}] INCOMING REQUEST`);
  console.log('====================');

  // Basic request info
  console.log('1. Basic Info:');
  console.log(`   Method: ${req.method}`);
  console.log(`   URL: ${req.url}`);
  console.log(`   HTTP Version: ${req.httpVersion}`);
  console.log(`   Remote Address: ${req.socket.remoteAddress}`);

  // Headers
  console.log('\n2. Headers:');
  console.log(util.inspect(req.headers, { colors: true, depth: null }));

  // Query parameters
  console.log('\n3. Query Parameters:');
  console.log(util.inspect(req.query, { colors: true, depth: null }));

  // Route parameters
  console.log('\n4. Route Parameters:');
  console.log(util.inspect(req.params, { colors: true, depth: null }));

  // Body (if present)
  console.log('\n5. Body:');
  console.log(util.inspect(req.body, { colors: true, depth: null }));

  // Cookies
  console.log('\n6. Cookies:');
  console.log(util.inspect(req.cookies, { colors: true, depth: null }));

  // Session (if using express-session)
  if (req.session) {
    console.log('\n7. Session:');
    console.log(util.inspect(req.session, { colors: true, depth: null }));
  }

  // File uploads (if using multer or similar)
  if (req.file || req.files) {
    console.log('\n8. Uploaded Files:');
    console.log(util.inspect(req.file || req.files, { colors: true, depth: null }));
  }

  // Additional properties
  console.log('\n9. Additional Properties:');
  console.log(`   Protocol: ${req.protocol}`);
  console.log(`   Secure: ${req.secure}`);
  console.log(`   IP: ${req.ip}`);
  console.log(`   Subdomain(s): ${util.inspect(req.subdomains)}`);
  console.log(`   Path: ${req.path}`);
  console.log(`   Hostname: ${req.hostname}`);
  console.log(`   Fresh: ${req.fresh}`);
  console.log(`   Stale: ${req.stale}`);
  console.log(`   XHR: ${req.xhr}`);

  console.log('\n====================\n');

  next();
};

export default requestLogger;
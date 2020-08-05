
// axios intercept
export default function ({ $axios, redirect  }: any) {
  $axios.onRequest((config: any) => {
    console.log('Making request to ' + config.url);
  });

  $axios.onError((error: any) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400');
    }
  });

  // Set baseURL (both client and server)
  $axios.setBaseURL(process.env.baseUrl);
}


export default function ({ store, redirect }) {
  const { global } = store.state
  console.log(global.user.isLogin)
  if (!global.user.isLogin) {
    return redirect('/login')
  }
}

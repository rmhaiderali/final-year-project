module.exports = (plugin) => {
  const update = plugin.controllers.user.update

  plugin.controllers.user.update = async (ctx) => {
    ctx.params.id = ctx.state.user.id
    if (ctx.state.user.email === ctx.request.body.email)
      delete ctx.request.body.email
    if (ctx.state.user.username === ctx.request.body.username)
      delete ctx.request.body.username
    return await update(ctx)
  }

  return plugin
}

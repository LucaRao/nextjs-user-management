import AuthForm from './auth-form'

export default function Home() {
  return (
    <div className="row">
      <div className="col-6">
        <h1 className="header">MemFire Cloud Auth + Storage</h1>
        <p>
        通过一个简单的配置文件管理示例体验我们的验证和存储功能。创建用户配置文件并上传头像。快速、简单、安全。
        </p>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
  )
}

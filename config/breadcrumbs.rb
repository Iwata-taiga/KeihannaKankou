crumb :root do
  link "HOME", root_path
end

crumb :company do
  link "会社概要", company_mains_path
  parent :root
end

crumb :contact do
  link "お問い合わせ", contact_mains_path
  parent :root
end
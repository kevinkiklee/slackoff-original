json.extract! channel, :id, :name, :description, :created_at, :display_name, :private

json.userCount user_count

json.users users do |user|
  json.id user.id
  json.username user.username
  json.photo_url asset_path(user.avatar.url)
  # json.extract! user, :id, :username, :photo_url
end

if messages.empty?
  json.messages []
else
  json.messages messages do |message|
    json.extract! message, :id, :content, :content_type, :updated_at

    # user = User.find(message.user_id)
    json.author do
      json.id message.user.id
      json.username message.user.username
      json.photo_url asset_path(message.user.avatar.url)
    end
    # , :id, :username, :photo_url
  end
end

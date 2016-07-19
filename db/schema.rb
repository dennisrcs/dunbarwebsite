# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160719044846) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "course_files", force: :cascade do |t|
    t.integer "course_id"
    t.string  "name"
    t.string  "file_path"
    t.integer "file_type"
  end

  add_index "course_files", ["course_id"], name: "index_course_files_on_course_id", using: :btree

  create_table "courses", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "group_infos", force: :cascade do |t|
    t.string  "title"
    t.string  "file_path"
    t.boolean "is_restricted", default: true
  end

  create_table "members", force: :cascade do |t|
    t.string  "name"
    t.string  "position"
    t.string  "telephone"
    t.string  "fax"
    t.string  "previous_affiliation"
    t.string  "bio"
    t.string  "building"
    t.string  "office"
    t.string  "avatar_path"
    t.string  "cv_path"
    t.string  "researcherid"
    t.boolean "is_current_member"
    t.boolean "is_listed"
  end

  create_table "mercury_images", force: :cascade do |t|
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "news", force: :cascade do |t|
    t.string   "content"
    t.date     "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "title"
  end

  create_table "publications", force: :cascade do |t|
    t.string   "article"
    t.string   "contributors"
    t.string   "journal"
    t.string   "year"
    t.string   "more_info"
    t.string   "pages"
    t.string   "link"
    t.string   "publication_picture"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "researches", force: :cascade do |t|
    t.string   "title"
    t.text     "summary"
    t.text     "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "slider_images", force: :cascade do |t|
    t.string   "title"
    t.text     "link"
    t.text     "slider_image_picture"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "content"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password_digest"
    t.integer  "member_id"
    t.boolean  "is_admin",          default: false
    t.string   "activation_digest"
    t.boolean  "activated",         default: false
    t.datetime "activated_at"
    t.string   "reset_digest"
    t.datetime "reset_sent_at"
  end

  add_index "users", ["member_id"], name: "index_users_on_member_id", using: :btree

end

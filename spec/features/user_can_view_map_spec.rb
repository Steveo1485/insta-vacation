require 'spec_helper'

describe "User visits root path" do
  it "should be shown maps#index view" do
    visit(root_path)
    expect(page).to have_content("Insta-Vacation")
  end

end
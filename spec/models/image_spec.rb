require 'spec_helper'

describe Image do
  it { should validate_presence_of(:latitude) }
end
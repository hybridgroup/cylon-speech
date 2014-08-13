require "formula"

class Espeak < Formula
  homepage "http://espeak.sourceforge.net/"
  url "http://sourceforge.net/projects/espeak/files/espeak/espeak-1.48/espeak-1.48.04-source.zip/download"
  sha1 "b22c0361885d05e61d98ecedca0a4926ea2fb2ad"

  depends_on "portaudio"

  def install
    share.install "espeak-data"
    cd "src" do
      rm "portaudio.h"
      system "make", "speak", "DATADIR=#{share}/espeak-data", "PREFIX=#{prefix}"
      bin.install "speak" => "espeak"
    end
  end

  test do
    system "espeak", "This is a test for Espeak."
  end
end

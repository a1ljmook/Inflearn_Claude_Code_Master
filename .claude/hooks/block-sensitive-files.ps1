$json = [Console]::In.ReadToEnd() | ConvertFrom-Json
$filePath = $json.tool_input.file_path

if ($filePath -match '\.env$' -or $filePath -match 'package-lock\.json$') {
    [Console]::Error.WriteLine("차단됨: $filePath 파일은 수정할 수 없습니다.")
    exit 2
}

exit 0